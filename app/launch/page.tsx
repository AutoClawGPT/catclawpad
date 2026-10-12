import { FAMILIES, LAUNCH_TOTAL } from '../../lib/content';
export default function Launch() {
  return (<>
    <p>// launch</p><h1>Launch a model token_</h1>
    <p>One token per model family, first come first serve. Dev wallet created, you fund, pump.fun launch, creator rewards to stakers.</p>
    <p>01 pick family ({FAMILIES.length}) / 02 coin / dev buy (SOL)</p>
    <pre>launch 0.05 + dev buy 0.5 + rent 0.03 = {LAUNCH_TOTAL} SOL</pre>
    <ul>{FAMILIES.map(f=><li key={f.name}>{f.name} {f.models} {f.price}</li>)}</ul>
    <button>[ connect wallet ]</button>
  </>);
}
