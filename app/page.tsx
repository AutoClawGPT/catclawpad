import { FAMILIES, ROWS } from '../lib/content';
export default function Home() {
  return (<>
    <h1>stake models. print intelligence._</h1>
    <p>models -&gt; credits -&gt; real utility live on solana</p>
    <p>01 connect wallet (Solana, no email) / 02 get LLM credits / 03 create key (sk-claw-) / 04 call any model</p>
    <pre>POST /api/public/v1/chat/completions{'\n'}Authorization: Bearer sk-claw-...</pre>
    <h3>families: {FAMILIES.length}</h3>
    <ul>{FAMILIES.slice(0,12).map(f=><li key={f.name}>{f.name} - {f.models} models - {f.price}</li>)}</ul>
    <h3>market 60%</h3>
    <ul>{ROWS.map(r=><li key={r.m}>{r.m} retail ${r.retail} / pool ${r.pool}</li>)}</ul>
  </>);
}
