<?php
    header("Content-type:text/html;charset=UTF-8;Access-Control-Allow-Origin: *");
    $username=$_GET['tel'];
    $insert_sql="INSERT INTO meizu_userinfo(username) VALUES ('$username')";
    $coon=new mysqli('localhost','root','','meizu',3306);
    // $sql="select * from meizu_userinfo where username='$username'";
    $coon->query("SET NAMES 'utf8'");
    $coon->query($insert_sql);
    // $result=$coon->query($sql);
    // $row=$result->fetch_assoc();
    $url="http://localhost:8888/MEIZU/app/sign_in.html"; 
    echo "<script>"; 
    echo "location.href='$url'"; 
    echo "</script>";
?>