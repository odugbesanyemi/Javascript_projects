<?php 
// create database 
$conn = mysqli_connect('localhost','root','');
$sql = "CREATE DATABASE  IF NOT EXISTS texchat";
$query =  mysqli_query($conn,$sql);
$conn = mysqli_connect('localhost', 'root','', 'texchat');

$sql = "CREATE TABLE IF NOT EXISTS `texchat`.`users` ( `id` INT NOT NULL AUTO_INCREMENT , `username` VARCHAR(50) NOT NULL , `fullname` TEXT NOT NULL , `phone` TEXT NOT NULL , `email` VARCHAR(100) NOT NULL , `password` TEXT NOT NULL , `pic` TEXT NOT NULL , `regdate` TIMESTAMP NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB";
$query = mysqli_query($conn,$sql);
?>