# Command Line App - Challenge

## #1 String Transformation

Command

```sh
./app.js lowercase "I aM CrAzY TeXT"
# Output "i am crazy text"

./app.js uppercase "I aM CrAzY TeXT"
# Output "I AM CRAZY TEXT"

./app.js capitalize "I aM CrAzY TeXT"
# Output "I Am Crazy Text"
```

## #2 Arithmetic

Command

```sh
./app.js add 1 4 5 2 3
# Output 15

./app.js subtract 10 2 4
# Output 4

./app.js multiply 3 5 8
# Output 120

./app.js divide 100 5 2
# Output 10
```

All of arithmetic commands should accepts infinite parameters.

## #3 Palindrome

Command

```sh
./app.js palindrome "Saya ingin pergi ke pasar"

./app.js palindrome "Kasur ini rusak"

./app.js palindrome "Ibu Ratna antar ubi"

./app.js palindrome "Aku suka rajawali, bapak. Apabila wajar, aku suka."
```

Output example

```
String: "Saya ingin pergi ke pasar"
Is palindrome? No

String: "Kasur ini rusak"
Is palindrome? Yes

String: "Ibu Ratna antar ubi"
Is palindrome? Yes

String: "Aku suka rajawali, bapak. Apabila wajar, aku suka."
Is palindrome? Yes
```

## #4 Obfuscator

Command

```sh
./app.js obfuscate "email@example.com"
```

Output example

```
&#101;&#109;&#97;&#105;&#108;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;
```

## #5 Random String

Create a command to generate random string. By default will generate 32 random alphanumeric.

This is just a simple thing, so please don't use 3rd-party library.

```sh
./app.js random
# Output Nf2HZlmJ9TItezKL1EcVrstKjxzLaQj8

./app.js random --length=10
# Output l1BgUotRmS

./app.js random --letters=false
# Output 83628194739182748381981283721982

./app.js random --numbers=false
# Output kdBOsSSFvqLCRvommVauHzmPdvSoYRIs

./app.js random --uppercase
# Output 9JWSY6OOTNPJ6LZLUQE9JIXWPQTLC0K2

./app.js random --numbers=false --lowercase --length=20
# Output ljmuoyopwxcvhycowqqi
```

## #6 Get IP Address in private network

This command will get your private IP address. 

> Note: Node.js already have network API.

Command

```sh
./app.js ip
```

Output example

```
192.168.100.11
```

## #7 Get External IP Address

This command will get your public IP address.

Command

```sh
./app.js ip-external
```

Output example

```
125.163.90.49
```

## #8 Get headlines from https://www.kompas.com/

Command

```sh
./app.js headlines
```

Output example

```
Title: Cerita Sripun, Dara Asal Semarang yang Taklukkan Hati David Beckham (1)
URL: https://regional.kompas.com/read/2018/03/29/07265661/cerita-sripun-dara-asal-semarang-yang-taklukkan-hati-david-beckham-1

Title: Aplikator Sepakat Tingkatkan Pendapatan Ojek "Online", Pengemudi Ngotot di Angka Rp 3.500
URL: https://nasional.kompas.com/read/2018/03/29/08514041/aplikator-sepakat-tingkatkan-pendapatan-ojek-online-pengemudi-ngotot-di

Title: Penampilan Modis Istri Kim Jong Un Saat Berkunjung ke China
URL: https://lifestyle.kompas.com/read/2018/03/29/063700020/penampilan-modis-istri-kim-jong-un-saat-berkunjung-ke-china

Title: Rusia Tantang Balik Inggris untuk Buktikan Tak Terlibat Racuni Skripal 
URL: https://internasional.kompas.com/read/2018/03/29/10534231/rusia-tantang-balik-inggris-untuk-buktikan-tak-terlibat-racuni-skripal
```

## #9 Unit Test
create unit test for `task no 2`
## #10 Unit test
create unit test for   `asyn/await` method to check total array from response get `https://jsonplaceholder.typicode.com/posts`
