const oracledb = require('oracledb')

module.exports = {
    KEY  : {user: 'C##AGUARD', password: 'Lg3Hcnsh', connectString: '127.0.0.1/ORCL'},
    META : (r,flag = false)=>{
        let m,d, n = {}, t = [];
        if(r?.rows)     d=r.rows;
        if(r?.metaData) m=r.metaData
        //    console.log({row:d,m:m})
        if(m)
            for (let j = 0; j < d.length; j++) {
                n = {}
                if(m.length===1){ t.push(d[j][0])
                } else {
                    for (let i = 0; i < m.length; i++) {
                        //  console.log('##',d[j][i])
                        n[m[i].name.toLowerCase()] = d[j][i] }
                    t[j] = n;
                }
            }
           if (d?.length===1 && !flag){ return {"status":t[0]}}else{ return t}
    },
    RUN  : async function run(key={},l){
        let connection;
        try { oracledb.autoCommit = true ;
            oracledb.initOracleClient()
            connection =  await oracledb.getConnection(key);
            const result = await connection.execute(l)
            return result
        } catch (err){ console.error(err); return null;} finally {
            if(connection){ try{await connection.close()}catch (err){console.error(err)} }
        }
    },
}