<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'PHPMailer/language/');
    $mail->IsHTML(true);

    // от кого письмо
    $mail->setForm('www@www.ua','Клиент');
    // кому отправить
    $mail->addAdress('stepan-stepan-9696@mail.ru');
    // тема письма
    $mail->Subject = 'Привет это проверка';


    // рука
    $hand = "правая";
    if($_POST['hand'] == "left"){
        $hand = "левая";
    }


    // тело письма
    $body = '<h1>заголовок</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя-</strong>'.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail-</strong>'.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['hand']))){
        $body.='<p><strong>Рука-</strong>'.$hand.'</p>';
    }
    if(trim(!empty($_POST['age']))){
        $body.='<p><strong>Возраст-</strong>'.$_POST['age'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Сообщение-</strong>'.$_POST['message'].'</p>';
    }


    $mail->Body = $body;

    // отправляем
    if(!$mail->send()){
        $message = 'ошибка';
    } else{
        $message = 'данные отпралены';
    }

    $response = ['message' => $message];

    header('Content-type: application/lson');
    echo json_encode($response);

?>