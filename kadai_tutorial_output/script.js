$(function(){
    // もっとみる ボタンアニメーション
    $(".button-more").on("mouseover",function(){
        $(this).animate({
            opacity:0.5,
            marginLeft: 20,
        },100);
    });
    $(".button-more").on("mouseout",function(){
        $(this).animate({
            opacity: 1.0,
            marginLeft: 0,
        },100);
    });


    //カルーセルの設定
    $(".carousel").slick({
        // 画像を自動的に切り替え
        autoplay : true,

        // 画像下部に何ページ目かドットで表示
        dots: true,

        // 画像のループの有無
        infinite : true,

        // 次の画像に切り替わるまでの時間(ミリ秒)
        autoplaySpeed : 5000,

        // 画像を手動で切り替える矢印ボタンを表示
        arrows : false,
    });


    // お問い合わせフォームの入力チェック

    //送信ボタンをクリックした時の処理
    $("#submit").on("click",function(event){
        // functionの引数に「event」を指定

        // formタグによる送信の拒否
        event.preventDefault();

        // 入力チェックした結果を変数「result」に格納
        let result = inputCheck();

        // エラー判定とメッセージ取得
        // 変数「result」オブジェクトのerrorとmessageを取得して格納
        let error = result.error;
        let message = result.message;

        // エラーが無い場合、フォームを送信
        if(error == false){
            //フォーム送信は実際に行わず、送信成功メッセージのみ表示
            alert("お問い合わせを送信しました。")
        }else{
            // エラーメッセージを表示する
            alert(message);
        }
    });

    // フォーカスが外れた時(blur)、フォームの入力チェックを実行
    $("#name").blur(function(){
        inputCheck();
    });
    $('#furigana').blur(function () {
        inputCheck();
    });
    $('#email').blur(function () {
        inputCheck();
    });
    $('#tel').blur(function () {
        inputCheck();
    });
    $('#message').blur(function () {
        inputCheck();
    });
    $('#agree').click(function () {
        inputCheck();
    });


    function inputCheck(){

        // エラーのチェック結果
        let result;


        // エラーメッセージのテキスト
        let message = "";

        // エラーがなければfalse、エラーがあればtrue
        let error = false;

        // 「お名前」のチェック
        if($("#name").val() == ""){
            // エラー発生時
            $('#name').css('background-color', '#f79999');
            error = true;
            message += "お名前を入力してください\n";
        }else{
            // エラーなしの時
            $('#name').css('background-color', '#fafafa');
        }

        // フリガナのチェック
        if ($('#furigana').val() == '') {
        // エラーあり
        $('#furigana').css('background-color', '#f79999');
        error = true;
        message += 'フリガナを入力してください。\n';
        } else {
        // エラーなし
        $('#furigana').css('background-color', '#fafafa');
        }


      // お問い合わせのチェック
        if ($('#message').val() == '') {
        // エラーあり
        $('#message').css('background-color', '#f79999');
        error = true;
        message += 'お問い合わせ内容を入力してください。\n';
        } else {
        // エラーなし
        $('#message').css('background-color', '#fafafa');
        }


        // メールアドレスのチェック
        if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
            // indexOf(" ")に入力した文字が見つからない場合、「-1」を返す
            // 「-1」の値が返ってきた時、「エラーあり」の処理を実行するように設定する

            // エラーあり
            $('#email').css('background-color', '#f79999');
            error = true;
            message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
            } else {
            // エラーなし
            $('#email').css('background-color', '#fafafa');
        }


    // 電話番号のチェック（未入力はOK、未入力でない場合は-が必要）
    if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1) {
      // エラーあり
        $('#tel').css('background-color', '#f79999');
        error = true;
        message += '電話番号に「-」が含まれていません。\n';
    } else {
      // エラーなし
        $('#tel').css('background-color', '#fafafa');
    }


    // 都道府県セレクトボックスのチェック
    if($("#prefecture").val() == ""){
        $("#prefecture").css('background-color', '#f79999');
        error = true;
        message += 'お住まいの都道府県を入力してください。\n';
    }else{
        $("#prefecture").css('background-color', '#fafafa');
    }

    // 個人情報のチェックボックスのチェック
    if($("#agree").prop("checked") == false){
        // prop(" ")でチェックボックスのチェック状態を確認できる
        error = true;
        massage += "個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n'";
    }

    // エラーの有無で送信ボタン画像の切り替え
    if(error === true){
        $("#submit").attr("src","images/button-submit.png");
    }else{
        $("#submit").attr("src","images/button-submit-blue.png");
    }


    // オブジェクトでエラー判定とメッセージを返す
    result = {
        error : error,
        message : message
    }

    // 戻り値としてエラーがあるかどうかを返す
    return result;
    }
});