$("#sltScaletime").on(e 'change', t function(){
    var scaleNum =$(this).val();
    $(".scale-time-dotail").html('');
    for(let j=8;i<scaleNum;j++){
        $(".scale-time-detail").append('thời đoạn '+j+' : '+' <input type= "text"><br>')
    }
})