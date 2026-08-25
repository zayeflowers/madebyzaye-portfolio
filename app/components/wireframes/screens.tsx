import React from 'react';
import {
  Actions,
  AddRow,
  B,
  Banner,
  Bar,
  BackLink,
  Body,
  Btn,
  Bullet,
  C,
  Chrome,
  Eyebrow,
  Field,
  Foot,
  Hint,
  Lead,
  Note,
  Phone,
  Question,
  Radio,
  Title,
} from './parts';

/**
 * The ten Injury Intake mobile wireframes, transcribed from the
 * "Geico injury intake wireframes" Claude Design project (artboard t1).
 *
 * Screen ids match the artboard's own labels (1a–1j) so the two stay
 * traceable to each other.
 */

/** 1a — the introduction that sets expectations before the flow starts. */
const StartInjuryReport: React.FC = () => (
  <Phone>
    <Chrome />
    <Body gap={16}>
      <Eyebrow>Injury Report</Eyebrow>
      <Title marginTop={-8}>Start Injury Report</Title>
      <Lead>
        <B>We&apos;re sorry to hear that you&apos;re injured.</B> We understand that
        getting injured in an accident can be stressful, but rest assured, this is a
        simple, step-by-step process that takes about <B>10 minutes</B> to complete.
      </Lead>
      <div style={{ fontSize: 13, lineHeight: 1.5, fontWeight: 700, color: C.ink }}>
        Some of the information we may collect includes:
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          paddingLeft: 4,
        }}
      >
        <Bullet>
          <B>Personal Details:</B> Relationship to insured, car insurance details
        </Bullet>
        <Bullet>
          <B>Medical Information:</B> Injuries, treatment, healthcare providers,
          hospital visits
        </Bullet>
        <Bullet>
          <B>Other Details:</B> Days missed from work, injury related expenses
        </Bullet>
      </div>
      <div style={{ fontSize: 11, color: C.soft }}>
        *Only if applicable to your situation
      </div>
      <Note>
        <B>Reassurance:</B> You got coverage – just focus on getting the care you
        need. We&apos;ll handle the rest.
      </Note>
      <Btn>Next</Btn>
    </Body>
    <Foot />
  </Phone>
);

/** 1b — injuries as shipped: a bare question with no guidance. */
const InjuriesCurrent: React.FC = () => (
  <Phone>
    <Chrome />
    <Banner />
    <Body gap={18} padding="26px 16px 24px">
      <Title size={28} marginTop={0}>
        Injury
      </Title>
      <Lead>Answering the questions will help us process your claim.</Lead>
      <Question marginTop={6}>Where are your injuries?</Question>
      <AddRow>Add Injury</AddRow>
      <Actions>
        <Btn>Next</Btn>
        <Btn tone="disabled">Back</Btn>
      </Actions>
      <BackLink />
    </Body>
    <Foot />
  </Phone>
);

/** 1c — injuries redesigned: eyebrow header, plain-language guidance, skip cue. */
const InjuriesSolution: React.FC = () => (
  <Phone>
    <Chrome />
    <Body>
      <Eyebrow>Injury Report</Eyebrow>
      <Title>Injuries</Title>
      <Question>Enter your injuries.</Question>
      <Hint>
        Use the (+) button to add additional injuries before moving to the next step.
        If you don&apos;t know the answer, select Next to skip this question.
      </Hint>
      <AddRow>Add Injury</AddRow>
      <Actions>
        <Btn>Next</Btn>
        <Btn tone="ghost">Back</Btn>
      </Actions>
      <BackLink />
    </Body>
    <Foot />
  </Phone>
);

/** 1d — the add-injury modal, where the body-part selection actually happens. */
const AddInjuryModal: React.FC = () => (
  <Phone>
    <Chrome />
    <Body>
      <Eyebrow>Injury Report</Eyebrow>
      <Title>Injuries</Title>
      <Question>Enter your injuries.</Question>
      <Hint>
        Use the (+) button to add additional injuries before moving to the next step.
      </Hint>
      <div
        style={{
          border: `1.5px solid ${C.accent}`,
          borderRadius: 10,
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          background: C.offWhite,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 700, color: C.ink }}>
            Add Injury
          </div>
          <div style={{ fontSize: 14, color: C.muted }}>✕</div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>
          Where is your injury located?
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: `1px solid ${C.border}`,
            borderRadius: 6,
            padding: '12px 14px',
            background: '#fff',
          }}
        >
          <div style={{ fontSize: 13, color: C.faint }}>Select an answer</div>
          <div style={{ fontSize: 10, color: C.muted }}>▾</div>
        </div>
        <div
          style={{
            padding: 12,
            borderRadius: 22,
            background: C.accent,
            color: C.accentInk,
            textAlign: 'center',
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          Save
        </div>
        <div
          style={{
            textAlign: 'center',
            fontSize: 13,
            fontWeight: 700,
            color: C.link,
          }}
        >
          Cancel
        </div>
      </div>
      <Actions>
        <Btn tone="disabled">Next</Btn>
        <Btn tone="disabled">Back</Btn>
      </Actions>
    </Body>
    <Foot />
  </Phone>
);

/** 1e — providers as shipped: six fields typed from memory. */
const ProvidersCurrent: React.FC = () => (
  <Phone>
    <Chrome />
    <Banner />
    <Body gap={16} padding="26px 16px 24px">
      <Title size={28} marginTop={0}>
        Injury
      </Title>
      <Lead>Answering the questions will help us process your claim.</Lead>
      <Question marginTop={6}>
        Enter your healthcare provider&apos;s information.
      </Question>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Field label="Provider name" />
        <Field label="Street address" />
        <Field label="City" />
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
        >
          <Field label="State" />
          <Field label="ZIP code" />
        </div>
        <Field label="Phone number" />
      </div>
      <Actions>
        <Btn>Next</Btn>
        <Btn tone="ghost">Back</Btn>
      </Actions>
    </Body>
    <Foot />
  </Phone>
);

/** 1f — providers redesigned: search and autofill, manual entry as the fallback. */
const ProvidersSolution: React.FC = () => (
  <Phone>
    <Chrome />
    <Body>
      <Eyebrow>Injury Report</Eyebrow>
      <Title>Healthcare Providers</Title>
      <Question>Search for your healthcare provider.</Question>
      <Hint>
        Start typing and select from the list. We&apos;ll fill in the address and
        phone number for you. If you can&apos;t find them, you can enter the details
        manually.
      </Hint>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          border: `1.5px solid ${C.accentLine}`,
          borderRadius: 6,
          padding: '11px 14px',
          background: '#fff',
        }}
      >
        <div
          style={{
            width: 13,
            height: 13,
            border: `1.5px solid ${C.faint}`,
            borderRadius: '50%',
            flex: 'none',
          }}
        />
        <div style={{ fontSize: 13, color: C.ink }}>Riverside Ortho</div>
      </div>
      <div
        style={{
          border: `1px solid ${C.line}`,
          borderRadius: 6,
          overflow: 'hidden',
          marginTop: -6,
        }}
      >
        {[
          {
            name: 'Riverside Orthopedic Associates',
            addr: '1420 Market St, Wilmington, DE 19801',
            active: true,
          },
          {
            name: 'Riverside Orthopedic — North Clinic',
            addr: '88 Concord Pike, Wilmington, DE 19803',
          },
          {
            name: 'Riverside Physical Therapy',
            addr: '210 Elm Ave, Newark, DE 19711',
            last: true,
          },
        ].map((r) => (
          <div
            key={r.name}
            style={{
              padding: '12px 14px',
              borderBottom: r.last ? undefined : `1px solid ${C.lineFaint}`,
              background: r.active ? C.accentSoft : undefined,
            }}
          >
            <div style={{ fontSize: 12.5, fontWeight: 700, color: C.ink }}>
              {r.name}
            </div>
            <div style={{ fontSize: 11.5, color: C.soft, marginTop: 2 }}>
              {r.addr}
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 12.5, fontWeight: 700, color: C.link }}>
        Enter provider details manually
      </div>
      <div style={{ marginTop: 2 }}>
        <AddRow compact>Add another provider</AddRow>
      </div>
      <Actions>
        <Btn>Next</Btn>
        <Btn tone="ghost">Back</Btn>
      </Actions>
    </Body>
    <Foot />
  </Phone>
);

/** 1g — lost wages as shipped: the five-day question with no rationale. */
const WagesCurrent: React.FC = () => (
  <Phone>
    <Chrome />
    <Banner />
    <Body gap={16} padding="26px 16px 24px">
      <Title size={28} marginTop={0}>
        Injury
      </Title>
      <Lead>Answering the questions will help us process your claim.</Lead>
      <Question marginTop={6}>
        Have you missed more than 5 days of work due to your injuries?
      </Question>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Radio label="Yes" checked />
        <Radio label="No" />
      </div>
      <Actions>
        <Btn>Next</Btn>
        <Btn tone="ghost">Back</Btn>
      </Actions>
      <BackLink />
    </Body>
    <Foot />
  </Phone>
);

/** 1h — lost wages redesigned: why we ask, and room for multiple employers. */
const WagesSolution: React.FC = () => (
  <Phone>
    <Chrome />
    <Body>
      <Eyebrow>Injury Report</Eyebrow>
      <Title>Lost Wages</Title>
      <Question>
        Have you missed more than 5 days of work due to your injuries?
      </Question>
      <Hint>
        We ask because missing more than 5 days may make you eligible for lost wage
        reimbursement. Your answer does not affect your coverage. If you&apos;re not
        sure yet, select Next to skip this question.
      </Hint>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Radio label="Yes" checked />
        <Radio label="No" />
      </div>
      <div
        style={{
          border: `1px solid ${C.line}`,
          borderRadius: 10,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          background: C.offWhite,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 12.5, fontWeight: 700, color: C.ink }}>
            Employer 1
          </div>
          <div style={{ fontSize: 11.5, fontWeight: 700, color: C.link }}>Edit</div>
        </div>
        <div style={{ height: 1, background: C.lineFaint }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ fontSize: 11.5, color: C.soft }}>Employer name</div>
          <Bar width="70%" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ fontSize: 11.5, color: C.soft }}>Dates missed</div>
          <Bar width="50%" />
        </div>
      </div>
      <AddRow compact>Add another employer</AddRow>
      <Actions>
        <Btn>Next</Btn>
        <Btn tone="ghost">Back</Btn>
      </Actions>
    </Body>
    <Foot />
  </Phone>
);

/** 1i — confirmation, with next steps generated from what was answered. */
const Confirmation: React.FC = () => (
  <Phone>
    <Chrome />
    <Body>
      <Eyebrow>Injury Report</Eyebrow>
      <Title>Your injury report is submitted</Title>
      <Lead>
        We&apos;ve received your information. Based on your answers, here&apos;s what
        happens next.
      </Lead>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          border: `1px solid ${C.line}`,
          borderRadius: 10,
          padding: 14,
        }}
      >
        <div
          style={{
            fontSize: 12.5,
            fontWeight: 700,
            color: C.ink,
            marginBottom: 2,
          }}
        >
          What you told us
        </div>
        {[
          ['Injuries', 96],
          ['Healthcare providers', 60],
          ['Lost wages', 74],
          ['Expenses', 52],
        ].map(([label, w]) => (
          <div
            key={label as string}
            style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}
          >
            <div style={{ fontSize: 12, color: C.soft }}>{label}</div>
            <div style={{ marginTop: 4 }}>
              <Bar width={w as number} height={10} />
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ fontSize: 14, fontWeight: 700, color: C.ink, marginTop: 4 }}
      >
        Your next steps
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          {
            title: 'Submit supporting documents',
            desc: 'You reported lost wages and medical expenses. Pay stubs and bills help us process these faster.',
            active: true,
          },
          {
            title: 'An adjuster will contact you',
            desc: 'Expect a call or message about your treatment details.',
          },
          {
            title: 'Track your claim',
            desc: 'Your claim status is available on your dashboard.',
          },
        ].map((step) => (
          <div
            key={step.title}
            style={{
              display: 'flex',
              gap: 12,
              border: step.active
                ? `1.5px solid ${C.accentLine}`
                : `1px solid ${C.line}`,
              background: step.active ? C.accentSoft : undefined,
              borderRadius: 10,
              padding: 14,
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 4,
                background: step.active ? C.banner : C.fill,
                flex: 'none',
              }}
            />
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: C.ink }}>
                {step.title}
              </div>
              <div
                style={{
                  fontSize: 11.5,
                  lineHeight: 1.45,
                  color: C.muted,
                  marginTop: 3,
                }}
              >
                {step.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Actions>
        <Btn>Upload documents</Btn>
        <Btn tone="ghost">Return to Dashboard</Btn>
      </Actions>
    </Body>
    <Foot />
  </Phone>
);

/** 1j — the handoff into Document Upload, which lives outside this flow. */
const DocumentUpload: React.FC = () => (
  <Phone>
    <Chrome />
    <Body>
      <Eyebrow>Document Upload</Eyebrow>
      <Title>Submit your documents</Title>
      <Note tone="grey">
        You&apos;ve finished your injury report. Uploading documents happens here, in
        a separate part of your claim. You can return to your dashboard at any time.
      </Note>
      <div
        style={{ fontSize: 14, fontWeight: 700, color: C.ink, marginTop: 4 }}
      >
        Documents we may need
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          marginTop: -4,
        }}
      >
        {[
          'Pay stubs or proof of lost wages',
          'Medical bills or receipts',
          'Photos related to your injury',
        ].map((item) => (
          <div
            key={item}
            style={{ display: 'flex', gap: 10, alignItems: 'center' }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                border: `1.5px solid ${C.border}`,
                borderRadius: 3,
                flex: 'none',
              }}
            />
            <div style={{ fontSize: 12.5, color: C.body }}>{item}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          border: `1.5px dashed ${C.border}`,
          borderRadius: 10,
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          background: C.offWhite,
        }}
      >
        <div
          style={{ width: 34, height: 34, borderRadius: 6, background: C.fill }}
        />
        <div style={{ fontSize: 13, fontWeight: 700, color: C.ink }}>
          Choose files
        </div>
        <div style={{ fontSize: 11.5, color: C.soft, textAlign: 'center' }}>
          PDF, JPG or PNG up to 10 MB each
        </div>
      </div>
      <div
        style={{
          border: `1px solid ${C.line}`,
          borderRadius: 8,
          padding: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 24,
            height: 30,
            background: C.fill,
            borderRadius: 3,
            flex: 'none',
          }}
        />
        <div style={{ flex: 1 }}>
          <Bar width="70%" height={10} />
          <div style={{ marginTop: 6 }}>
            <div
              style={{
                height: 8,
                width: '38%',
                background: C.lineFaint,
                borderRadius: 2,
              }}
            />
          </div>
        </div>
        <div style={{ fontSize: 12, color: C.muted }}>✕</div>
      </div>
      <Actions>
        <Btn>Submit documents</Btn>
        <Btn tone="ghost">I&apos;ll do this later</Btn>
      </Actions>
    </Body>
    <Foot />
  </Phone>
);

export type ScreenId =
  | '1a'
  | '1b'
  | '1c'
  | '1d'
  | '1e'
  | '1f'
  | '1g'
  | '1h'
  | '1i'
  | '1j';

/** Keyed by the artboard's own screen ids so the two files stay traceable. */
export const SCREENS: Record<ScreenId, { label: string; Screen: React.FC }> = {
  '1a': { label: 'Start Injury Report', Screen: StartInjuryReport },
  '1b': { label: 'Where are your injuries', Screen: InjuriesCurrent },
  '1c': { label: 'Injuries', Screen: InjuriesSolution },
  '1d': { label: 'Add Injury', Screen: AddInjuryModal },
  '1e': { label: 'Healthcare providers', Screen: ProvidersCurrent },
  '1f': { label: 'Healthcare providers', Screen: ProvidersSolution },
  '1g': { label: 'Lost wages', Screen: WagesCurrent },
  '1h': { label: 'Lost wages', Screen: WagesSolution },
  '1i': { label: 'Confirmation and next steps', Screen: Confirmation },
  '1j': { label: 'Document upload', Screen: DocumentUpload },
};
