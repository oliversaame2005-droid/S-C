import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const file=url.pathname==='/'?'index.html':url.pathname.slice(1);const target=path.resolve(root,file);if(!target.startsWith(root+path.sep)){res.writeHead(403);return res.end();}const data=await readFile(target);res.writeHead(200,{'Content-Type':{'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'}[path.extname(file)]||'application/octet-stream'});res.end(data);}catch{res.writeHead(404);res.end('Not found');}}).listen(process.env.PORT||3000,'0.0.0.0',()=>console.log('FORM running on port '+(process.env.PORT||3000)));
