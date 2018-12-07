<?php
header("Content-type:text/html;charset=UTF-8");
$username=$_GET['username'];

$coon=new mysqli('localhost','root','','meizu',3306);
$sql="select * from meizu_userinfo where username='$username'";
$coon->query("SET NAMES 'utf8'");

$result=$coon->query($sql);
$row=$result->fetch_assoc();

if($row){
    $arr=array("code" =>"10000" ,"data"=>"");
    $spl1 = 'delete from meizu_userinfo where ';
}else{
    $arr=array("code"=>"0", "data"=>"");
}
echo json_encode($arr);
// echo "注册成功！";
?>
