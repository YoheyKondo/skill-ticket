$(function(){
    //バリデーションチェック
    $('input').on('blur',function(){
        var val  =$(this).val(); //値を取得
        var name =$(this).attr('name'); //nameを取得
        var id   ='#' + name;//idを作成
        //1.NullCheck 値がNullだったら
        if(nullChk(val)){ //Nullチェック関数
            //エラーメッセージを空欄に上書き
            errMsg(id,'');
        }else{
            errMsg(id,'入力必須です。');
            return false;//処理中断
        }

        //2.メール、パスワード仕様チェック
        if(name == 'email'){ //メール仕様チェック
            if(mailChk(val)){
                errMsg(id,'');
            }else{
                errMsg(id,'メールアドレスの形式が異なります。');
            }
        }else{ //パスワード仕様チェック
            if(hlfChk(val)){
                errMsg(id,'パスワード仕様が異なります。');
            }else{
                errMsg(id,'');
            }
        }
        //エラーメッセージチェック
        if(errorAllChek()==0){
            $('input[type="submit"]').attr('disabled',false);
        }else{
            $('input[type="submit"]').attr('disabled',true);
        }
    });
});


//=============================
//    バリデーションチェック関数    
//=============================
//Null Check
function nullChk(val){
    //三項演算子（条件式） ? 真の場合：偽の場合;
    //値がNullまたは空白または変数定義がなかった場合
    return (val == null || val == '' || val == undefined) ? false :true;
}

//Output Error Message
function errMsg(id, msg){
    $(id + ' .lg_red').text(msg);
}

// E-mail Check
function mailChk(val){
    return (val.match(/^[A-Za-z0-9]+[\w-]+@\w{1}[\w.-]+\w{2,}$/)) ? true : false;
}

// PassWord Check（記号は「!?_-」のみ使用可）
function hlfChk(val){
    return (val.match(/["#$%&'()\*\+\.,\/:;<=>@\[\\\]^`{|}~]/g)) ? true : false;
}

//エラーメッセージチェック
function errorAllChek(){
    var cnt = 0;
    $('.lg_red').each(function(i,e){
        var txt = $(this).text(); //カッコの中身が記載されてない場合、その中身が取り出される
        console.log(txt);
        if(txt !=''){
            cnt++;
        }
    });
    return cnt;
}