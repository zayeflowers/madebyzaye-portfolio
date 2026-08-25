import React, { ReactNode } from 'react';

/**
 * Shared primitives for the Injury Intake wireframes, imported from the
 * "Geico injury intake wireframes" Claude Design project.
 *
 * These render as real DOM rather than flattened screenshots so they stay
 * crisp at any zoom and cost no image bytes. Everything is inline-styled and
 * self-contained, which keeps the wireframe palette isolated from the site's
 * cascade — a wireframe should read as an artifact from another context, not
 * inherit the portfolio's type and color.
 *
 * The source used Lato; these inherit the site's sans rather than pulling in
 * another webfont for decorative content.
 */

/** Wireframe palette, carried over from the design file. */
export const C = {
  ink: '#1F2328',
  body: '#3F4550',
  muted: '#5B6270',
  soft: '#7A8290',
  faint: '#8A9099',
  frame: '#D6D9DE',
  line: '#DDE1E6',
  lineSoft: '#E5E7EB',
  lineFaint: '#EDEFF2',
  border: '#C3C8D0',
  fill: '#E5E7EB',
  offWhite: '#FBFCFD',
  dot: '#9AA1AC',
  accent: '#B6CBE2',
  accentInk: '#26415E',
  accentLine: '#8FB0D3',
  accentSoft: '#EDF2F8',
  accentMid: '#5C7EA6',
  link: '#3E5C7E',
  banner: '#C9D7E6',
  disabled: '#EDEFF2',
  disabledInk: '#B3B8BF',
} as const;

/** The 340px phone shell every screen sits in. */
export const Phone: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div
    style={{
      // Width comes from the wrapper so the frame can shrink on a phone; the
      // screen's own layout is fluid, so it reflows rather than clipping.
      width: '100%',
      maxWidth: 340,
      background: '#fff',
      border: `1px solid ${C.frame}`,
      borderRadius: 14,
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
);

/** Greyed-out app chrome: wordmark placeholder and three icon slots. */
export const Chrome: React.FC = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 16px',
      borderBottom: `1px solid ${C.lineSoft}`,
    }}
  >
    <div style={{ width: 76, height: 14, background: C.line, borderRadius: 2 }} />
    <div style={{ display: 'flex', gap: 10 }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{ width: 14, height: 14, background: C.line, borderRadius: 2 }}
        />
      ))}
    </div>
  </div>
);

export const Foot: React.FC = () => (
  <div
    style={{
      borderTop: `1px solid ${C.lineSoft}`,
      padding: 18,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div style={{ width: 96, height: 16, background: C.line, borderRadius: 2 }} />
  </div>
);

/** The blue band the current-state screens carry above the content. */
export const Banner: React.FC = () => (
  <div style={{ height: 34, background: C.banner }} />
);

export const Body: React.FC<{
  children: ReactNode;
  gap?: number;
  padding?: string;
}> = ({ children, gap = 14, padding = '20px 16px 24px' }) => (
  <div style={{ padding, display: 'flex', flexDirection: 'column', gap }}>
    {children}
  </div>
);

export const Eyebrow: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div
    style={{
      fontSize: 11,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: C.soft,
      fontWeight: 700,
    }}
  >
    {children}
  </div>
);

export const Title: React.FC<{
  children: ReactNode;
  size?: number;
  marginTop?: number;
}> = ({ children, size = 22, marginTop = -6 }) => (
  <div
    style={{
      fontSize: size,
      lineHeight: size >= 28 ? 1.1 : 1.2,
      fontWeight: 900,
      color: C.ink,
      marginTop,
    }}
  >
    {children}
  </div>
);

/** Standing body copy — the paragraph under a title. */
export const Lead: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div
    style={{ fontSize: 13, lineHeight: 1.55, color: C.body, textWrap: 'pretty' }}
  >
    {children}
  </div>
);

/** The bolded prompt a screen is actually asking. */
export const Question: React.FC<{
  children: ReactNode;
  marginTop?: number;
}> = ({ children, marginTop = 8 }) => (
  <div
    style={{
      fontSize: 14,
      lineHeight: 1.4,
      fontWeight: 700,
      color: C.ink,
      marginTop,
    }}
  >
    {children}
  </div>
);

/** Supporting guidance under a question — the added-in-the-redesign copy. */
export const Hint: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div style={{ fontSize: 12.5, lineHeight: 1.5, color: C.muted, marginTop: -6 }}>
    {children}
  </div>
);

export const Note: React.FC<{ children: ReactNode; tone?: 'blue' | 'grey' }> = ({
  children,
  tone = 'blue',
}) => (
  <div
    style={{
      fontSize: 12.5,
      lineHeight: 1.5,
      color: tone === 'blue' ? C.body : C.muted,
      background: tone === 'blue' ? C.accentSoft : '#F4F5F7',
      border: `1px solid ${tone === 'blue' ? '#D8E3F0' : C.line}`,
      borderRadius: 8,
      padding: 12,
    }}
  >
    {children}
  </div>
);

export const Btn: React.FC<{
  children: ReactNode;
  tone?: 'primary' | 'ghost' | 'disabled';
}> = ({ children, tone = 'primary' }) => {
  const base = {
    padding: 13,
    borderRadius: 22,
    textAlign: 'center' as const,
    fontWeight: 700,
    fontSize: 13,
  };
  if (tone === 'ghost') {
    return (
      <div
        style={{
          ...base,
          background: '#fff',
          border: `1.5px solid ${C.accent}`,
          color: C.link,
        }}
      >
        {children}
      </div>
    );
  }
  if (tone === 'disabled') {
    return (
      <div style={{ ...base, background: C.disabled, color: C.disabledInk }}>
        {children}
      </div>
    );
  }
  return (
    <div style={{ ...base, background: C.accent, color: C.accentInk }}>
      {children}
    </div>
  );
};

/** Stacked Next / Back pair at the foot of a step. */
export const Actions: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 6 }}
  >
    {children}
  </div>
);

/** Dashed "Add …" affordance with a plus. */
export const AddRow: React.FC<{ children: ReactNode; compact?: boolean }> = ({
  children,
  compact = false,
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: `1.5px dashed ${C.border}`,
      borderRadius: 10,
      padding: compact ? 14 : 16,
    }}
  >
    <div style={{ fontSize: compact ? 13.5 : 14, fontWeight: 700, color: C.ink }}>
      {children}
    </div>
    <div style={{ fontSize: 20, lineHeight: 1, color: C.accentMid }}>+</div>
  </div>
);

/** Empty labelled input. */
export const Field: React.FC<{ label: string }> = ({ label }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <div style={{ fontSize: 11.5, fontWeight: 700, color: C.muted }}>{label}</div>
    <div
      style={{
        height: 40,
        border: `1px solid ${C.border}`,
        borderRadius: 6,
        background: '#fff',
      }}
    />
  </div>
);

export const Radio: React.FC<{ label: string; checked?: boolean }> = ({
  label,
  checked = false,
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      border: checked ? `1.5px solid ${C.accentLine}` : `1px solid ${C.line}`,
      background: checked ? C.accentSoft : undefined,
      borderRadius: 8,
      padding: '14px 16px',
    }}
  >
    <div
      style={{
        width: 18,
        height: 18,
        borderRadius: '50%',
        border: `2px solid ${checked ? C.accentMid : C.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none',
      }}
    >
      {checked && (
        <div
          style={{
            width: 9,
            height: 9,
            borderRadius: '50%',
            background: C.accentMid,
          }}
        />
      )}
    </div>
    <div
      style={{
        fontSize: 13.5,
        fontWeight: checked ? 700 : 400,
        color: checked ? C.ink : C.body,
      }}
    >
      {label}
    </div>
  </div>
);

export const BackLink: React.FC = () => (
  <div style={{ fontSize: 12.5, fontWeight: 700, color: C.link, marginTop: 6 }}>
    ‹ Return to Dashboard
  </div>
);

export const Bullet: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', gap: 10 }}>
    <div
      style={{
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: C.dot,
        marginTop: 6,
        flex: 'none',
      }}
    />
    <div style={{ fontSize: 12.5, lineHeight: 1.5, color: C.body }}>{children}</div>
  </div>
);

/** Grey bar standing in for content the wireframe doesn't spell out. */
export const Bar: React.FC<{ width: number | string; height?: number }> = ({
  width,
  height = 12,
}) => (
  <div style={{ width, height, background: C.fill, borderRadius: 2 }} />
);

export const B: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span style={{ fontWeight: 700 }}>{children}</span>
);
