/** передаем дату и время сервера                                   [ GET /pl/ttime/:tm   ] */
module.exports.info      = async function (req,res) {
    console.log('get /ttime/:tm','getTime')
    /**  тут  проверить если время сильно отличается то записать в алармы */
    let dd=(new Date()).getTime() //-1000*60*60;
    // console.log('>>',req.params.tm,dd,dd-req.params.tm)
    res.status(200).json({time:dd})
}