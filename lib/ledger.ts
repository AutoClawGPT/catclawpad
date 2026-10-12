import { createHash, randomBytes } from 'crypto';
export function newKey(): {key:string;hash:string} {
  const key = 'sk-claw-' + randomBytes(24).toString('hex');
  const hash = createHash('sha256').update(key).digest('hex');
  return { key, hash };
}
// ponytail: in-mem ledger, ceiling=single instance. upgrade path=Postgres Neon when multi-instance.
export const ledger = new Map<string, number>(); // wallet -> credits
export function balance(w:string){ return ledger.get(w) ?? 0; }
export function mint(w:string,n:number){ ledger.set(w, balance(w)+n); }
export function deduct(w:string,n:number){ const b=balance(w); if(b<n) return false; ledger.set(w,b-n); return true; }
