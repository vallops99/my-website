// One Case study cited by an engagement type: meta column (sticky at >=64rem) and story column.
// Case studies with a repository link or no engagement type are rendered by MoreWork.
const CaseRow = ({ study, number }) => (
  <li id={`case-${study.slug}`}>
    <div className="case-meta">
      <p className="small muted">{String(number).padStart(2, '0')} · {study.context}</p>
      <h4 className="case-client">{study.client}</h4>
      {study.status && <p className="chip-accent">{study.status}</p>}
      <ul className="chips">{study.tech.map((t) => <li key={t}>{t}</li>)}</ul>
    </div>
    <div className="case-body">
      <p className="case-lead">{study.lead}</p>
      {study.supporting.length > 0 && <ul className="muted">{study.supporting.map((s) => <li key={s}>{s}</li>)}</ul>}
    </div>
  </li>
);

export default CaseRow;
