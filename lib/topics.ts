export const topics = [
  {
    slug: 'owner-experience',
    title: 'Owner Experience',
    description:
      'The real at-home ownership layer: handling, storage, cleaning, setup, privacy, trust, repair, and whether the product actually improves life after purchase.',
    focus: ['Handling and storage', 'Cleaning and material care', 'Setup and privacy', 'Repairability and support'],
    planned: [
      'What Doll Owners Actually Want From AI',
      'Maintenance Is Part of the Experience',
      'Why Owner Experience Matters More Than Robot Demos'
    ],
    future: ['Beginner buyer guide', 'Storage and handling guide', 'Owner care checklist']
  },
  {
    slug: 'ai-tech',
    title: 'AI Tech',
    description:
      'Voice, memory, personality systems, mouth sync, companion apps, AI heads, Bluetooth inserts, and the software layer that creates presence.',
    focus: ['Voice and memory', 'Personality systems', 'AI heads and inserts', 'Mouth sync and emotional coherence'],
    planned: [
      'Voice Changes Everything',
      'Memory Is the Product',
      'Why Manufacturer AI Feels Fake'
    ],
    future: ['AI companion setup guide', 'Voice and memory comparison', 'Owner-built AI stack notes']
  },
  {
    slug: 'buyer-guides',
    title: 'Buyer Guides',
    description:
      'Practical buying help for curious buyers and first-time owners: what to look for, what to avoid, and how to judge claims before spending money.',
    focus: ['First-time buyer questions', 'Vendor trust', 'Feature value', 'Avoiding buyer regret'],
    planned: [
      'The First-Time Buyer Problem',
      'How to Read Vendor Claims',
      'What Features Are Actually Worth Paying For'
    ],
    future: ['First doll buyer guide', 'AI feature checklist', 'Vendor trust checklist']
  },
  {
    slug: 'product-coverage',
    title: 'Product Coverage',
    description:
      'Owner-first coverage of new products, vendor claims, AI accessories, robotic features, review units, and the gap between marketing and real use.',
    focus: ['Vendor claims', 'Review units', 'AI accessories', 'Real owner value'],
    planned: [
      'Product Claims vs. Owner Reality',
      'The Problem With Gimmicks',
      'Robotics Will Not Save a Bad Owner Experience'
    ],
    future: ['Product claim scorecard', 'Review standards', 'Partner/vendor notes']
  },
  {
    slug: 'build-log',
    title: 'Build Log',
    description:
      'Owner-side experiments and product concepts, including storage, posing, photography workflows, and the Companion Dock idea.',
    focus: ['Companion Dock', 'Photography workflows', 'Storage systems', 'Accessory integration'],
    planned: [
      'The Owner-Built Companion Stack',
      'Companion Dock Concept Notes',
      'Photography and Green-Screen Workflows'
    ],
    future: ['Companion Dock concept page', 'Parts list', 'Prototype notes']
  }
];

export type Topic = (typeof topics)[number];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}
