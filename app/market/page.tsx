import { ROWS } from '../../lib/content';
export default function Market() {
  return (<>
    <p>// market main pool</p><h1>Credits market_</h1>
    <p>buy 60% retail. credits to API balance. SOL settle.</p>
    <ul>{ROWS.map(r=><li key={r.m}>{r.m} retail ${r.retail} / pool ${r.pool}</li>)}</ul>
    <button>[ connect wallet ]</button>
  </>);
}
