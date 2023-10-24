<?php
// Получаем список всех файлов в текущей директории
$files = glob("./*.html");

echo "HTML files in current directory:<br>";

// Выводим каждый файл в списке
foreach($files as $file) {
    echo $_SERVER['HTTP_HOST']."/".basename($file) . "<br>";
}
?>