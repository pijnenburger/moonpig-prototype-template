import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const typesPath = join(
  root,
  'node_modules/@moonpig/launchpad-components/dist/types/index.d.ts',
)
const modalTypesPath = join(
  root,
  'node_modules/@moonpig/launchpad-components/dist/types/Modal/index.d.ts',
)
const launchpadDocPath = join(root, 'docs/LAUNCHPAD.md')
const packageJsonPath = join(
  root,
  'node_modules/@moonpig/launchpad-components/package.json',
)

const START_MARKER = '<!-- AUTO-GENERATED:START -->'
const END_MARKER = '<!-- AUTO-GENERATED:END -->'

/** @type {Record<string, string[]>} */
const categories = {
  Actions: [
    'PrimaryButton',
    'SecondaryButton',
    'TertiaryButton',
    'IconButton',
    'HeartToggle',
  ],
  'Typography and lists': [
    'Text',
    'Heading',
    'TextLink',
    'RichTextContainer',
    'BulletedList',
    'NumberedList',
    'IconList',
    'IconListItem',
  ],
  Navigation: [
    'Tabs',
    'TabList',
    'Tab',
    'TabPanels',
    'TabPanel',
    'Link',
    'LinkAsProvider',
    'CustomLink',
    'OptionsMenu',
  ],
  'Feedback and status': [
    'Alert',
    'Banner',
    'InfoStrip',
    'LoadingIndicator',
    'SkeletonBox',
    'Rating',
    'PageError',
    'ProgressIndicator',
    'StepStatus',
    'OurPick',
  ],
  Layout: [
    'Box',
    'Flex',
    'Grid',
    'Container',
    'VerticalStack',
    'VStack',
    'Strip',
    'AspectRatio',
    'Divider',
  ],
  Overlays: [
    'Modal',
    'ModalOverlay',
    'ModalBody',
    'ModalHeader',
    'ModalContent',
    'SideModal',
    'Popover',
    'Tooltip',
  ],
  Content: [
    'Accordion',
    'AccordionContent',
    'AccordionHeading',
    'Carousel',
    'Chip',
    'Pill',
    'Emoji',
    'Image',
  ],
  'Accessibility and focus': [
    'ScreenReaderOnly',
    'FocusIndicator',
    'focusIndicatorStyles',
  ],
  'Do not use in this template': ['GlobalStyle', 'GlobalStyleWithTokens'],
}

function parseNamedExports(source) {
  const exports = new Set()
  const pattern = /export\s+\{\s*([^}]+)\s*\}/g
  let match

  while ((match = pattern.exec(source)) !== null) {
    for (const part of match[1].split(',')) {
      const trimmed = part.trim()
      if (!trimmed) continue

      const aliasMatch = trimmed.match(/^\w+\s+as\s+(\w+)$/)
      exports.add(aliasMatch ? aliasMatch[1] : trimmed.split(/\s+/).pop())
    }
  }

  return exports
}

function parsePackageVersion() {
  try {
    const pkg = JSON.parse(readFileSync(packageJsonPath, 'utf8'))
    const major = String(pkg.version).split('.')[0]
    return major
  } catch {
    return 'unknown'
  }
}

function formatCategoryBlock(title, items) {
  return `### ${title}\n\n\`${items.join('`, `')}\``
}

function buildGeneratedSection(versionMajor, allExports) {
  const categorized = new Set()
  const blocks = []

  for (const [title, items] of Object.entries(categories)) {
    const present = items.filter((item) => allExports.has(item))
    present.forEach((item) => categorized.add(item))
    if (present.length > 0) {
      blocks.push(formatCategoryBlock(title, present))
    }
  }

  const uncategorized = [...allExports]
    .filter((item) => !categorized.has(item))
    .sort()

  if (uncategorized.length > 0) {
    blocks.push(formatCategoryBlock('Other', uncategorized))
  }

  return `${START_MARKER}
${blocks.join('\n\n')}

Grouped exports from \`@moonpig/launchpad-components\` (v${versionMajor}). For props and usage, see Storybook.
${END_MARKER}`
}

function main() {
  let typesSource
  let modalSource

  try {
    typesSource = readFileSync(typesPath, 'utf8')
    modalSource = readFileSync(modalTypesPath, 'utf8')
  } catch {
    console.error(
      'Launchpad types not found. Run npm install with MNPG_NPM_REGISTRY_API_KEY set.',
    )
    process.exit(1)
  }

  const allExports = new Set([
    ...parseNamedExports(typesSource),
    ...parseNamedExports(modalSource),
  ])

  allExports.add('Carousel')

  const versionMajor = parsePackageVersion()
  const generated = buildGeneratedSection(versionMajor, allExports)

  const doc = readFileSync(launchpadDocPath, 'utf8')
  const start = doc.indexOf(START_MARKER)
  const end = doc.indexOf(END_MARKER)

  if (start === -1 || end === -1) {
    console.error(
      `Markers not found in docs/LAUNCHPAD.md. Expected ${START_MARKER} and ${END_MARKER}.`,
    )
    process.exit(1)
  }

  const updated =
    doc.slice(0, start) + generated + doc.slice(end + END_MARKER.length)

  writeFileSync(launchpadDocPath, updated)
  console.log(
    `Updated docs/LAUNCHPAD.md component index (Launchpad v${versionMajor}, ${allExports.size} exports).`,
  )
}

main()
