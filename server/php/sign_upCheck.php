<?php
    header("Content-type:text/html;charset=UTF-8");
    $username=$_GET['tel'];
    $insert_sql="INSERT INTO meizu_userinfo(username) VALUES ('$username')";
    $coon=new mysqli('localhost','root','','meizu',3306);
    // $sql="select * from meizu_userinfo where username='$username'";
    $coon->query("SET NAMES 'utf8'");
    $coon->query($insert_sql);
    // $result=$coon->query($sql);
    // $row=$result->fetch_assoc();



?>