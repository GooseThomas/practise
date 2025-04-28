const c = require("../services/db");
const prfx='█-grd-█',log=(...arg)=>{console.log(prfx,...arg)}, error=(...err)=>{console.error(prfx,...err)};
/** передаем дату и время сервера                                   [ GET /pl/ttime/:tm   ] */
module.exports.info      = async function (req,res) {
    log('get /api/info','info')
    const SQ_GET_list='select * from TESTER.LOGS_GRD';
    log ('SQ_GET_list',SQ_GET_list)

    c.RUN(c.KEY,SQ_GET_list).then(t=>{
        log('#SQ_GET_list');
        log(c.META(t));
        list(c.META(t));
        res.status(200).json(c.META(t,false))
    })

    /**  тут  проверить если время сильно отличается то записать в алармы */
   // let dd=(new Date()).getTime() //-1000*60*60;
    // console.log('>>',req.params.tm,dd,dd-req.params.tm)
   // res.status(200).json({time:dd})
}

function list(x){
    if(x===[] || x===undefined || x[0]===undefined) return;
    let  l=0,h=Object.keys(x[0]), // массив заголовков
        z='█',  w={}; // массив ширины полей в строке
    // минимальная ширина колонки = ширине названия
    for (let t of h) {w[t]=t.trim().length}
    // перебираем чтобы понять максимальную длину каждого поля
    for (let e of x){
        for (let b of h){
            if (typeof e[b] === 'number') {l=e[b].toString().length} else {l=e[b]?.trim().length}
            if(e[b] && l > (w[b]??0)){
                w[b]=l;
            }
        }
    }

    // Выводим строки
    l=0; for (let y of h){l+=w[y]+3}; // l+=2;
    log('▛'+'▀'.repeat(l)+'▜');
    for (let g of h){  z+=ln(h[g],w[g]); }; log(z);
    log('▙'+'▄'.repeat(l)+'▟');
    for (let n of x){  log('█',stroka(n,h,w)) }
    log('▛'+'▀'.repeat(l)+'▜');
}
/** собираеся строка из обьекта n с полями из массива h длинны из обьекта w */
function stroka(n,h,w){
    //   log('stroka',n,w)
    let t='';
    for (let m of h){
        t+=ln(n[m],w[m]);   // h[m]
    }
    return t;
}
/** добавляем пробелы к строке s чтобы получить длину х */
function ln(s,x){
    let d='';
    if(s)if(s.length===undefined) {d=s.toString()}else{d=s}
    d=d.trim();
    return ' '.repeat(x-(d?.length??0)+1)+(d??0)+' █'
}