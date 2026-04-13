import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

/**
 * Design Philosophy: Dark Academic with Vintage Scientific Aesthetics
 * - Warm cream text (#f5e6d3) on deep charcoal (#1a1a1a) background
 * - Vintage 1970s scientific journal aesthetic
 * - Typography: Crimson Text (headers), Lora (body), JetBrains Mono (code)
 * - Animations: Typewriter effects, staggered reveals, scroll-triggered animations
 * - Layout: Asymmetric with margin notes and vintage borders
 */

export default function Home() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as any },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 } as any}
        className="border-b border-accent/20 py-8 md:py-12 mb-12"
      >
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded border-2 border-accent flex items-center justify-center">
                <span className="text-xl font-bold text-accent">F</span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-accent" style={{ fontFamily: 'var(--font-serif-display)' }}>
                  Freons & The Environment
                </h1>
                <p className="text-sm text-muted-foreground italic">A Research Study</p>
              </div>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-3xl"
          >
            A comprehensive examination of chlorofluorocarbons (CFCs), their environmental impact on the ozone layer, 
            and the development of safer refrigerant alternatives.
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container pb-16"
      >
        {/* Section 1: What are Freons */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="section-header">What are Freons?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-base leading-relaxed mb-4">
                Freons are chlorofluorocarbons (CFCs), a class of synthetic organic compounds containing carbon, fluorine, 
                and chlorine atoms. Invented in 1928 by Thomas Midgely, these compounds revolutionized refrigeration and 
                became ubiquitous in industrial applications due to their remarkable stability and safety profile.
              </p>
              <div className="vintage-border mb-6">
                <h3 className="text-lg font-semibold text-accent mb-4" style={{ fontFamily: 'var(--font-serif-display)' }}>
                  Chemical Characteristics
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Freon-12 (CFC-12):</strong> CCl₂F₂ (dichlorodifluoromethane)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Freon-11 (CFC-11):</strong> CFCl₃ (trichlorofluoromethane)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Colorless, odorless, non-flammable gases</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Extremely stable in the lower atmosphere</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="margin-note">
                <strong>Historical Note:</strong> The discovery of Freon-12 was remarkably rapid—Thomas Midgely identified 
                it in just 3 days, revolutionizing the refrigeration industry overnight.
              </div>
            </div>
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* Section 2: Common Uses */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="section-header">Common Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Refrigeration', desc: 'Primary use in air conditioning systems and household refrigerators' },
              { title: 'Aerosol Propellants', desc: 'Propellants in spray cans for deodorants, insecticides, and cleaners' },
              { title: 'Foam Blowing', desc: 'Blowing agents for foam insulation in buildings and appliances' },
              { title: 'Industrial Solvents', desc: 'Cleaning solvents in precision manufacturing and electronics' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 } as any}
                className="border-l-4 border-accent/40 pl-6 py-4"
              >
                <h3 className="font-semibold text-accent mb-2" style={{ fontFamily: 'var(--font-serif-display)' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* Section 3: Preparation - Swarts Reaction */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="section-header">Preparation: The Swarts Reaction</h2>
          <div className="space-y-6">
            <p className="text-base leading-relaxed">
              The Swarts reaction is the primary industrial method for preparing Freons, particularly Freon-12 (CFC-12). 
              This elegant transformation converts alkyl chlorides or alkyl bromides into alkyl fluorides using metallic 
              fluorides as the fluorinating agent.
            </p>

            <div className="vintage-border">
              <h3 className="font-semibold text-accent mb-4" style={{ fontFamily: 'var(--font-serif-display)' }}>
                Reaction Mechanism
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-accent mb-2">Starting Material:</p>
                  <p className="chemical-formula">Carbon tetrachloride (CCl₄)</p>
                </div>
                <div>
                  <p className="font-semibold text-accent mb-2">Reagent:</p>
                  <p className="chemical-formula">Antimony pentafluoride (SbF₅) or Cobalt trifluoride (CoF₃)</p>
                </div>
                <div>
                  <p className="font-semibold text-accent mb-2">Conditions:</p>
                  <p className="chemical-formula">Heat: 100-200°C</p>
                </div>
                <div>
                  <p className="font-semibold text-accent mb-2">Product:</p>
                  <p className="chemical-formula">Freon-12 (CCl₂F₂)</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 p-6 rounded border border-accent/20">
              <p className="font-mono text-sm text-accent mb-2">Chemical Equation:</p>
              <p className="font-mono text-sm text-foreground">
                CCl₄ + 2HF → CCl₂F₂ + 2HCl
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-2">(with SbF₅ catalyst)</p>
            </div>

            <p className="text-sm text-muted-foreground italic">
              The reaction replaces chlorine atoms with fluorine atoms through nucleophilic substitution, 
              producing the desired CFC compound with high efficiency.
            </p>
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* Section 4: Environmental Impact */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="section-header">Environmental Impact: Ozone Depletion</h2>

          <div className="space-y-8">
            {/* The Ozone Layer */}
            <div>
              <h3 className="text-xl font-semibold text-accent mb-4" style={{ fontFamily: 'var(--font-serif-display)' }}>
                The Stratospheric Ozone Layer
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="text-base leading-relaxed mb-4">
                    Located 10-30 miles above Earth's surface in the stratosphere, the ozone layer serves as our planet's 
                    primary defense against harmful ultraviolet (UV) radiation. This critical atmospheric component is 
                    continuously formed and destroyed through natural processes, maintaining a delicate equilibrium that 
                    has protected life for billions of years.
                  </p>
                </div>
                <div className="margin-note">
                  <strong>Key Distinction:</strong> Stratospheric ozone is "good up high"—it protects us. Ground-level ozone 
                  is "bad nearby"—it causes respiratory damage and smog.
                </div>
              </div>
            </div>

            {/* Depletion Mechanism */}
            <div>
              <h3 className="text-xl font-semibold text-accent mb-4" style={{ fontFamily: 'var(--font-serif-display)' }}>
                Mechanism of Ozone Depletion
              </h3>

              <div className="space-y-4">
                <div className="vintage-border">
                  <h4 className="font-semibold text-accent mb-3">Step 1: UV Radiation Breaks CFC Bonds</h4>
                  <p className="text-sm mb-3">
                    CFC molecules drift into the stratosphere over months to years. Once there, ultraviolet radiation 
                    causes homolytic cleavage of carbon-chlorine bonds, releasing highly reactive chlorine radicals.
                  </p>
                  <p className="font-mono text-sm bg-secondary/50 p-3 rounded text-accent">
                    CFC + hν → Cl· + CFC radical
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    Each CFC molecule can release 1-3 chlorine radicals
                  </p>
                </div>

                <div className="vintage-border">
                  <h4 className="font-semibold text-accent mb-3">Step 2: Chlorine Radical Chain Reaction</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <span className="text-accent font-bold min-w-fit">Initiation:</span>
                      <span className="font-mono">CFC + hν → Cl· + CFC radical</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-accent font-bold min-w-fit">Propagation 1:</span>
                      <span className="font-mono">Cl· + O₃ → ClO· + O₂</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-accent font-bold min-w-fit">Propagation 2:</span>
                      <span className="font-mono">ClO· + O· → Cl· + O₂</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-accent font-bold min-w-fit">Termination:</span>
                      <span className="font-mono">2ClO· → Cl-O-O-Cl (rare)</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    <strong>Critical Feature:</strong> The chlorine radical is regenerated in each cycle, allowing one 
                    chlorine atom to destroy thousands of ozone molecules before termination occurs.
                  </p>
                </div>
              </div>
            </div>

            {/* Consequences */}
            <div>
              <h3 className="text-xl font-semibold text-accent mb-4" style={{ fontFamily: 'var(--font-serif-display)' }}>
                Consequences of Ozone Depletion
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="vintage-border">
                  <h4 className="font-semibold text-accent mb-3">Health Effects</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-accent">→</span>
                      <span>Increased skin cancer (melanoma and non-melanoma)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">→</span>
                      <span>Cataracts and eye damage</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">→</span>
                      <span>Weakened immune systems</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">→</span>
                      <span>Increased susceptibility to infections</span>
                    </li>
                  </ul>
                </div>

                <div className="vintage-border">
                  <h4 className="font-semibold text-accent mb-3">Environmental Effects</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-accent">→</span>
                      <span>Damage to marine ecosystems and phytoplankton</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">→</span>
                      <span>Reduced crop yields and plant growth</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">→</span>
                      <span>Degradation of materials (plastics, paints)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">→</span>
                      <span>Ecological disruption and biodiversity loss</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* Section 5: Safer Alternatives */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="section-header">Safer Alternatives to CFCs</h2>

          <div className="space-y-6">
            {[
              {
                id: 'hcfcs',
                title: 'HCFCs (Hydrochlorofluorocarbons)',
                content: (
                  <div className="space-y-3 text-sm">
                    <p><strong>Example:</strong> HCFC-22 (CHClF₂)</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">ODP</p>
                        <p className="font-semibold text-accent">0.05</p>
                        <p className="text-xs text-muted-foreground">(5% of CFC-11)</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">GWP</p>
                        <p className="font-semibold text-accent">1,810</p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground">
                      <strong>Advantage:</strong> Significantly lower ozone impact. <strong>Disadvantage:</strong> Still contributes 
                      to ozone depletion and greenhouse effect. <strong>Status:</strong> Being phased out under Montreal Protocol.
                    </p>
                  </div>
                ),
              },
              {
                id: 'hfcs',
                title: 'HFCs (Hydrofluorocarbons)',
                content: (
                  <div className="space-y-3 text-sm">
                    <p><strong>Examples:</strong> HFC-134a, HFC-152a</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">ODP</p>
                        <p className="font-semibold text-accent">0</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">GWP (134a)</p>
                        <p className="font-semibold text-accent">1,430</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">GWP (152a)</p>
                        <p className="font-semibold text-accent">124</p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground">
                      <strong>Advantage:</strong> Zero ozone depletion. <strong>Disadvantage:</strong> Potent greenhouse gases. 
                      <strong>Status:</strong> Being phased down under Kigali Amendment.
                    </p>
                  </div>
                ),
              },
              {
                id: 'hfos',
                title: 'HFOs (Hydrofluoroolefins)',
                content: (
                  <div className="space-y-3 text-sm">
                    <p><strong>Example:</strong> HFO-1234yf</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">ODP</p>
                        <p className="font-semibold text-accent">0</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">GWP</p>
                        <p className="font-semibold text-accent">4</p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground">
                      <strong>Advantage:</strong> Minimal environmental impact. <strong>Disadvantage:</strong> Slightly flammable 
                      (ASHRAE A2L). <strong>Status:</strong> Currently used in majority of new vehicles.
                    </p>
                  </div>
                ),
              },
              {
                id: 'natural',
                title: 'Natural Refrigerants',
                content: (
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-accent mb-2">Hydrocarbons (Propane, Isobutane)</p>
                      <p className="text-xs text-muted-foreground mb-2">ODP: 0 | GWP: 3-20</p>
                      <p className="italic text-muted-foreground">
                        Environmentally friendly and efficient, but highly flammable with safety concerns.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent mb-2">Carbon Dioxide (CO₂/R744)</p>
                      <p className="text-xs text-muted-foreground mb-2">ODP: 0 | GWP: 1</p>
                      <p className="italic text-muted-foreground">
                        Non-flammable and abundant, but requires 5-10× higher operating pressures.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-accent mb-2">Ammonia (NH₃)</p>
                      <p className="text-xs text-muted-foreground mb-2">ODP: 0 | GWP: 0</p>
                      <p className="italic text-muted-foreground">
                        Excellent thermodynamic properties but toxic, requiring careful handling.
                      </p>
                    </div>
                  </div>
                ),
              },
            ].map((alt) => (
              <motion.div key={alt.id} className="vintage-border">
                <button
                  onClick={() => toggleSection(alt.id)}
                  className="w-full flex items-center justify-between hover:text-accent transition-colors"
                >
                  <h3 className="text-lg font-semibold text-accent" style={{ fontFamily: 'var(--font-serif-display)' }}>
                    {alt.title}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${expandedSections[alt.id] ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedSections[alt.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' } as any}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-accent/20"
                  >
                    {alt.content}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* Section 6: Comparative Analysis */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="section-header">Comparative Analysis</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-accent/40">
                  <th className="text-left py-3 px-4 text-accent font-semibold">Property</th>
                  <th className="text-center py-3 px-4 text-accent font-semibold">CFCs</th>
                  <th className="text-center py-3 px-4 text-accent font-semibold">HCFCs</th>
                  <th className="text-center py-3 px-4 text-accent font-semibold">HFCs</th>
                  <th className="text-center py-3 px-4 text-accent font-semibold">HFOs</th>
                  <th className="text-center py-3 px-4 text-accent font-semibold">Natural</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'ODP', cfcs: '0.6-1.0', hcfcs: '0.01-0.1', hfcs: '0', hfos: '0', natural: '0' },
                  { label: 'GWP', cfcs: '4,680-10,900', hcfcs: '77-1,810', hfcs: '124-1,430', hfos: '1-4', natural: '0-20' },
                  { label: 'Efficiency', cfcs: 'High', hcfcs: 'High', hfcs: 'High', hfos: 'High', natural: 'Very High' },
                  { label: 'Safety', cfcs: 'Very Safe', hcfcs: 'Safe', hfcs: 'Safe', hfos: 'Slightly Flammable', natural: 'Variable' },
                  { label: 'Environmental Impact', cfcs: 'Severe', hcfcs: 'Moderate', hfcs: 'Climate', hfos: 'Minimal', natural: 'Minimal' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-accent/10 hover:bg-secondary/20 transition-colors">
                    <td className="py-3 px-4 font-semibold text-accent">{row.label}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.cfcs}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.hcfcs}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.hfcs}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.hfos}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">{row.natural}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <div className="section-divider" />

        {/* Section 7: Conclusion */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="section-header">Conclusion & Future Directions</h2>

          <div className="space-y-6">
            <div className="vintage-border bg-secondary/20">
              <p className="text-base leading-relaxed mb-4">
                While CFCs have been largely phased out through the Montreal Protocol, the transition to safer alternatives 
                remains an ongoing global effort. The success of international cooperation in addressing ozone depletion 
                demonstrates humanity's capacity to address environmental challenges through coordinated action.
              </p>
              <p className="text-base leading-relaxed">
                However, the climate impact of refrigerants continues to present challenges. A combination of improved HFOs, 
                natural refrigerants, and emerging technologies offers the most promising path forward for environmentally 
                sustainable cooling solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-semibold text-accent mb-3" style={{ fontFamily: 'var(--font-serif-display)' }}>
                  Key Achievements
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Montreal Protocol successfully prevented ozone depletion</li>
                  <li>• CFC production virtually eliminated</li>
                  <li>• Ozone layer recovery underway</li>
                  <li>• Alternatives proven effective and safe</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-semibold text-accent mb-3" style={{ fontFamily: 'var(--font-serif-display)' }}>
                  Future Directions
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Development of lower-GWP refrigerants</li>
                  <li>• Natural refrigerant innovation</li>
                  <li>• Alternative cooling technologies</li>
                  <li>• Global refrigerant recovery programs</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="border-t border-accent/20 pt-8 mt-12"
        >
          <p className="text-xs text-muted-foreground text-center">
            Research compiled from NCERT, EPA, LibreTexts Chemistry, and peer-reviewed scientific literature.
          </p>
          <p className="text-xs text-muted-foreground text-center mt-2">
            © 2026 Freons & Environmental Impact Research Study
          </p>
        </motion.footer>
      </motion.main>
    </div>
  );
}
