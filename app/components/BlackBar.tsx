"use client";

import React from 'react';

/**
 * A full-bleed black rule between sections. Decorative only — it carries no
 * content, so it stays out of the accessibility tree.
 */
const BlackBar: React.FC = () => <div className="black-bar" aria-hidden="true" />;

export default BlackBar;
