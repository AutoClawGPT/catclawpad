import { NextRequest, NextResponse } from 'next/server';
import { deduct } from '../../../../../../lib/ledger';
// Phase1 mock gateway: 401 no key, 402 empty, 200 mock. Upstream wired via UPSTREAM_LLM_KEYS later.
const KEYS = new Map<string,string>(); // hash -> wallet (seeded via /api keygen later)
export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization') || '';
  if (!auth.startsWith('Bearer sk-claw-')) return NextResponse.json({error:'unauthorized'}, {status:401});
  const body = await req.json().catch(()=>({}));
  const wallet = KEYS.get(auth.slice(7)) ?? 'demo';
  const cost = 1; // ponytail: flat 1 credit/call, ceiling=test. upgrade=per-token billing.
  // @ts-ignore demo wallet seeded with 0 -> 402 path testable
  if (!deduct(wallet, cost)) return NextResponse.json({error:'insufficient credits'}, {status:402});
  return NextResponse.json({choices:[{message:{role:'assistant',content:'ok ['+(body.model||'claude')+'] cluster='+(process.env.SOLANA_CLUSTER||'devnet')}}]});
}
