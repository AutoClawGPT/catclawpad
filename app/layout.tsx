export const metadata = { title: 'CatClawPad', description: 'stake models. print intelligence.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body style={{background:'#0a0a0a',color:'#00ff88',fontFamily:'monospace',margin:0}}>
      <nav style={{padding:'12px 20px',borderBottom:'1px solid #1a1a1a',display:'flex',gap:16}}>
        <b>[CatClawPad]</b>
        {['/','/launch','/tokens','/agents','/market','/api','/llm'].map(r=><a key={r} href={r} style={{color:'#00ff88'}}>[{r==='/'?'pad':r.slice(1)}]</a>)}
      </nav>
      <main style={{padding:24,maxWidth:900}}>{children}</main>
    </body></html>
  );
}
