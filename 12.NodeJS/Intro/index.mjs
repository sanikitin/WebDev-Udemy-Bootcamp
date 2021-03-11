// Use File system on PC: Connect module https://nodejs.org/docs/latest/api/fs.html
import { copyFile } from 'fs/promises';
// Теперь Nodejs имеет доступ к файловой системе и я могу скопировать файл
// Создан файл1 и нужно скопировать в файл2 с помощью copyFile(src, dest[, mode], callback)
// Больше методов в документации
copyFile("file1.txt", "file2.txt");
