<?php
// Задача 2: Определите индексированный массив с 5 строками.
// Напишите код, который сортирует этот массив в алфавитном порядке.

$strings = ["Banana", "Apple", "Cherry", "Mango", "Peach"];

sort($strings);

echo "Отсортированные строки:\n";
foreach ($strings as $string) {
    echo $string . "\n";
}