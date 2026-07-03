import type { ProcessStepData } from '../types'
import { images } from './images'

export const constructionIntro =
  'Building a home on vacant land requires proper planning, verified documents, authority approvals, and a structured execution process. We guide clients through every stage professionally.'

export const constructionSteps: ProcessStepData[] = [
  {
    step: 1,
    title: 'Land Document Verification',
    description:
      'Before starting construction, it is important to verify all land-related documents. This includes Patta and Chitta, Encumbrance Certificate, FMB sketch, mother documents, previous title chain, and layout approval. Approved layouts such as DTCP or CMDA layouts usually make the construction and loan process smoother. If the plot is unapproved, regularisation may be required based on local authority rules.',
    image: images.processDocuments,
    checklist: [
      'Patta & Chitta verification',
      'Encumbrance Certificate check',
      'FMB sketch review',
      'Mother document and title chain verification',
      'Layout approval check',
      'DTCP / CMDA / local body approval status',
    ],
  },
  {
    step: 2,
    title: 'Design, Soil Test & Plan Approval',
    description:
      'After document verification, the next stage is technical planning. A soil test helps understand the bearing capacity of the land. A licensed architect, engineer, or surveyor prepares the building plan. The plan must be submitted to the relevant local body such as Panchayat, Municipality, Corporation, CMDA, or DTCP for approval.',
    image: images.processPlanning,
    table: {
      headers: ['Approval / Requirement', 'Purpose', 'Responsible Authority'],
      rows: [
        {
          cells: [
            'Soil Test',
            'To check soil strength and foundation requirements',
            'Private soil testing lab',
          ],
        },
        {
          cells: [
            'Building Plan',
            'Architectural and structural planning',
            'Licensed architect / engineer / surveyor',
          ],
        },
        {
          cells: [
            'Plan Approval',
            'Legal permission to construct',
            'Panchayat / Municipality / Corporation / CMDA / DTCP',
          ],
        },
        {
          cells: [
            'Temporary EB Connection',
            'Electricity for construction work',
            'TNEB / local electricity board',
          ],
        },
      ],
    },
    note: 'Approval rules, fees, and procedures vary depending on the location and local authority. All regulatory information should be verified before execution.',
  },
  {
    step: 3,
    title: 'Site Preparation',
    description:
      'Before construction begins, the site must be cleaned, measured, and secured. Boundary stones should be confirmed. Temporary water supply, labour shed, material storage, and construction access should be arranged. Proper setbacks must be maintained as per the approved plan and local rules.',
    image: images.processSite,
    checklist: [
      'Site cleaning',
      'Boundary confirmation',
      'Fencing',
      'Water source arrangement',
      'Temporary labour and material storage',
      'Setback marking',
      'Construction access planning',
    ],
  },
  {
    step: 4,
    title: 'Construction Execution',
    description:
      'With approvals in place and the site ready, structural execution proceeds stage by stage. Each stage is inspected and documented before moving to the next.',
    image: images.processExecution,
    stages: [
      'Site marking',
      'Earthwork and excavation',
      'Foundation',
      'Basement and plinth beam',
      'Column work',
      'Brickwork',
      'Lintel and sunshade',
      'Roof slab',
      'Electrical and plumbing lines',
      'Plastering',
      'Flooring',
      'Painting',
      'Doors and windows',
      'Final finishing',
    ],
  },
  {
    step: 5,
    title: 'Completion & Utility Connections',
    description:
      'After construction is complete, the homeowner must apply for completion-related formalities and utility connections. This may include completion certificate, permanent electricity connection, water and sewage connection, property tax assessment, and regular house tax or water tax payments.',
    image: images.processCompletion,
    checklist: [
      'Completion certificate',
      'Permanent EB connection',
      'Water connection',
      'Sewage connection',
      'Property tax assessment',
      'House tax and water tax setup',
    ],
  },
  {
    step: 6,
    title: 'Cost & Timeline Guidance',
    description:
      'Construction cost and approval expenses vary based on location, material quality, labour availability, design complexity, soil condition, and finishing requirements.',
    image: images.processCost,
    estimates: [
      {
        label: 'Approval & documentation cost',
        value: 'Depends on authority',
        note: 'Varies by authority and project size',
      },
      {
        label: 'Standard construction cost',
        value: 'Finish-dependent',
        note: 'Varies based on material and finish level',
      },
      {
        label: 'Timeline · 1000 sq.ft home',
        value: '≈ 6 – 9 months',
        note: 'Depending on site condition and scope',
      },
    ],
    note: 'Costs shown on the website should be treated as indicative only. Final quotation must be prepared after site visit, design finalisation, material selection, and authority verification.',
  },
]

export const constructionTips: string[] = [
  'Choose approved plots for easier loan processing',
  'Discuss Vaastu requirements during the planning stage',
  'Use written agreements for labour or material contracts',
  'Take photos at every construction stage',
  'Avoid major design changes after execution begins',
  'Track material quality, stage payments, and work progress',
]
