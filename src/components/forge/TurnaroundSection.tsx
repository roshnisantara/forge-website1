import React from 'react';
import GanttChart from './GanttChart';
import type { ForgeStat, ForgeStage } from '../../types/forge';
import { DEFAULT_FORGE_STATS } from '../../data/forgeDefaults';

interface TurnaroundSectionProps {
  stats?: ForgeStat[];
  stages?: ForgeStage[];
}

export const TurnaroundSection: React.FC<TurnaroundSectionProps> = ({
  stats = DEFAULT_FORGE_STATS,
  stages,
}) => {
  return (
    <section className="sec sec--dark on-dark sec--turnaround" id="turnaround">
      <div className="turnaround-container">
        <div className="turnaround-header">
          <p className="marker marker--center">
            § 03
            <span className="marker__divider">/</span>
            Turnaround
          </p>
          <h2 className="h2 turnaround-title">24 to 39 days, end to end.</h2>
          <p className="lede turnaround-lede">
            Each stage carries a published turnaround. The clock on a stage
            starts when the previous gate closes — so the only variable in the
            schedule is approval speed.
          </p>
        </div>

        <div className="turnaround-chart-wrap">
          <GanttChart stages={stages} />
        </div>

        <dl className="stats stats--center">
          {stats.map((stat) => (
            <div key={stat.id || stat.label} className="stat-card">
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default TurnaroundSection;
