---
title: Κυνηγώντας τους Απατεώνες
date: 15/03/2026
category: Writeup
description: Σ01 Ε06 (Overlord RAT... η συνέχεια :) )
link: --
---


Συνεχίζουμε τη σειρά μας. Βέβαια, το δείγμα είναι πάλι από τον ίδιο λογαριασμό στο Github ο οποίος μας έχει δώσει περισσότερο περιεχόμενο από το Youtube. Αυτό το δείγμα "λύγισε" σχεδόν αμέσως. 

![Screenshot](/images/hunting_scammers_s01e06/overlord_indicator_1.png)

Αυτός είναι ο κύριος λόγος για τον οποίο έσπασε γρήγορα. Και η πόρτα και η IP είναι γνωστές. Τις είδαμε κιόλας στο άρθρο με τον [Overlord](/articles/overlord). Είναι ακριβώς ίδια. Οπότε με προϊδέασε αμέσως. Το περίεργο είναι ότι μετά από τόσες μέρες το C2 του λειτουργεί ακόμα. Μόνο τα αρχεία άλλαξαν. Πάμε τώρα να δούμε και κάποια άλλα στοιχεία που να αποδεικνύουν τον Overlord.

# ΣΤΟΙΧΕΙΟ 1

![Screenshot](/images/hunting_scammers_s01e06/die.png)

Γλώσσα GO οπότε γνωρίζουμε ότι ψάχνουμε για τα path και τα πακέτα της GO. Επίσης θα χρειαστεί να ενσωματώσουμε τα απαραίτητα σύμβολα στο Ghidra χρησιμοποιώντας το GoReSym καθώς και να τα μετατρέψουμε στη σωστή μορφή με τη βοήθεια ενός python script το οποίο τώρα θα σας το παραθέσω.

```python
import json

with open('symbols.json', 'r') as f:
    data = json.load(f)

skipped = 0
written = 0

with open('ghidra_symbols.txt', 'w') as f:
    for func in data['UserFunctions']:
        addr = func.get('Start')
        name = func.get('FullName')
        
        if not addr or not name or addr == 0 or not name.strip():
            skipped += 1
            continue
        f.write(f"{name} 0x{addr:x}\n")
        written += 1

print(f"Written: {written}")
print(f"Skipped: {skipped}")
```

Είναι ένα πολύ απλό πρόγραμμα που στην ουσία συλλέγει από το `json` αρχείο, που εξήγαγε το GoReSym, τις τιμές μέσα στην κατηγορία `UserFunctions` με όνομα `Start`, το οποίο είναι το ID του συμβόλου, και το `FullName` το οποίο είναι το όνομα του συμβόλου. Παράλληλα, παραλείπει τις κατηγορίες που είναι κενές και εν τέλει γράφει τις δύο προαναφερθείσες τιμές στο αρχείο `ghidra_symbols.txt`. 


Το `ghidra_symbols.txt` το ενσωματώνουμε στο Ghidra ώστε να γίνει λίγο πιο εύκολη η ανάγνωση του κώδικα. 


# ΣΤΟΙΧΕΙΟ 2

Πριν καν ανοίξουμε καλά καλά το Ghidra, με το που του εναποθέτουμε το αρχείο βλέπουμε το δεύτερο στοιχείο:
  ```
  Project File Name: 	stub.exe
Last Modified:	Sun Mar 15 02:20:35 PDT 2026
Readonly:	false
Program Name:	stub.exe
Language ID:	x86:LE:64:default (4.6)
Compiler ID:	golang
Processor:	x86
Endian:	Little
Address Size:	64
Minimum Address:	140000000
Maximum Address:	140c8b1ff
# of Bytes:	13129552
# of Memory Blocks:	11
# of Instructions:	0
# of Defined Data:	53803
# of Functions:	11383
# of Symbols:	11538
# of Data Types:	35
# of Data Type Categories:	4
Compiler:	golang
Created With Ghidra Version:	12.0
Date Created:	Sun Mar 15 02:20:22 PDT 2026
Executable Format:	Portable Executable (PE)
Executable Location:	/C:/Users/flare/Downloads/stub.exe
Executable MD5:	fe32f8e76841e801881d595b2e1d1ba3
Executable SHA256:	3b35a83abcfeff1e6b6724aa8e7cb8f631f96feda6594becf1e5d8fbe825d45e
FSRL:	file:///C:/Users/flare/Downloads/stub.exe?MD5=fe32f8e76841e801881d595b2e1d1ba3
Golang app path:	overlord-client/cmd/agent
Golang build[-buildmode]:	exe
Golang build[-compiler]:	gc
Golang build[-ldflags]:	"-s -w -X overlord-client/cmd/agent/config.DefaultServerURL=wss://45.138.16.80:5173 -X overlord-client/cmd/agent/config.DefaultMutex=C36qu4gRr3vIzXp-Ex8icDVr -X overlord-client/cmd/agent/config.DefaultPersistence=true -X overlord-client/cmd/agent/persistence.DefaultPersistenceMethod=registry -X overlord-client/cmd/agent/config.DefaultAgentToken=XW@HEey*MElJc4cCmi1wWkKlPN7ZrgQQ^POJVSM2jc63^BXKNPPGScmOxTKlQw8n -X overlord-client/cmd/agent/config.DefaultBuildTag=81952223-dacd-4bb7-9bc2-5a4b9b3d1fb7 -H=windowsgui"
Golang build[-tags]:	noprint
Golang build[CGO_CFLAGS]:
Golang build[CGO_CPPFLAGS]:
Golang build[CGO_CXXFLAGS]:
Golang build[CGO_ENABLED]:	1
Golang build[CGO_LDFLAGS]:
Golang build[DefaultGODEBUG]:	containermaxprocs=0,decoratemappings=0,tlssha1=1,updatemaxprocs=0,x509sha256skid=0
Golang build[GOAMD64]:	v1
Golang build[GOARCH]:	amd64
Golang build[GOOS]:	windows
Golang dep[   0]:	github.com/Kirizu-Official/windows-camera-go v0.2.0 h1:wF8s6US/me/d5WaBeoHGVKE8mBOl83kKTfMV38YYQ3g=
Golang dep[   1]:	github.com/creack/pty v1.1.21 h1:1/QdRyBaHHJP61QkWMXlOIBfsgdDeeKfK8SYVUWJKf0=
Golang dep[   2]:	github.com/gen2brain/malgo v0.11.24 h1:hHcIJVfzWcEDHFdPl5Dl/CUSOjzOleY0zzAV8Kx+imE=
Golang dep[   3]:	github.com/gen2brain/x264-go v0.3.1 h1:XFi6y8HM5BCMrP4kR/o711iBU++XNfLOY3PG8Alz2kU=
Golang dep[   4]:	github.com/gen2brain/x264-go/x264c v0.0.0-20241022182000-732e1bdb7da2 h1:aS40m/Q+6z0ID7EVegxnnw3lWHUceGbg0zucbo7335I=
Golang dep[   5]:	github.com/gen2brain/x264-go/yuv v0.0.0-20221204084822-82ee2951dea2 h1:lihaRUKRj94EWVZRp1jTmEiIxmvjEiSb9fJl2xftrXY=
Golang dep[   6]:	github.com/kbinani/screenshot v0.0.0-20250624051815-089614a94018 h1:NQYgMY188uWrS+E/7xMVpydsI48PMHcc7SfR4OxkDF4=
Golang dep[   7]:	github.com/lxn/win v0.0.0-20210218163916-a377121e959e h1:H+t6A/QJMbhCSEH5rAuRxh+CtW96g0Or0Fxa9IKr4uc=
Golang dep[   8]:	github.com/tetratelabs/wazero v1.7.0 h1:jg5qPydno59wqjpGrHph81lbtHzTrWzwwtD4cD88+hQ=
Golang dep[   9]:	github.com/vmihailenco/msgpack/v5 v5.4.1 h1:cQriyiUvjTwOHg8QZaPihLWeRAAVoCpE00IUPn0Bjt8=
Golang dep[  10]:	github.com/vmihailenco/tagparser/v2 v2.0.0 h1:y09buUbR+b5aycVFQs/g70pqKVZNBmxwAhO7/IwNM9g=
Golang dep[  11]:	golang.org/x/sys v0.24.0 h1:Twjiwq9dn6R1fQcyiK+wQyHWfaz/BJB+YIpzU/Cv3Xg=
Golang dep[  12]:	gopkg.in/yaml.v3 v3.0.1 h1:fxVm/GzAzEWqLHuvctI91KS9hhNmmWOoWu0XTYJS7CA=
Golang dep[  13]:	nhooyr.io/websocket v1.8.10 h1:mv4p+MnGrLDcPlBoWsvPP7XCzTYMXP9F9eIGoKbgx7Q=
Golang go version:	1.25.6
Golang main package path:	overlord-client
Golang main package version:	(devel)
Preferred Root Namespace Category:
Relocatable:	true
SectionAlignment:	4096
  ```

Εδώ περιέχονται πολλά στοιχεία, όχι μόνο ένα. Αρχικά η διεύθυνση και πόρτα του C2 `45.138.16.80:5173` ακριβώς ίδια με το προηγούμενο δείγμα όπως είπαμε προηγουμένως.

Έχουμε το mutex του αρχείου το οποίο επιτρέπει στον ιό να τρέχει μόνο μια φορά στο κάθε σύστημα `C36qu4gRr3vIzXp-Ex8icDVr`. Το κλειδί αυθεντικοποίησης για την επικοινωνία με τον σέρβερ `XW@HEey*MElJc4cCmi1wWkKlPN7ZrgQQ^POJVSM2jc63^BXKNPPGScmOxTKlQw8n`. Το buildTag το οποίο είναι μοναδικό για κάθε θύμα είτε για κάθε εκστρατεία.

Πακέτα που επιβεβαιώνουν το "οπλοστάσιο" του Overlord.

1.   Δυνατότητα ελέγχου webcam  --> `github.com/Kirizu-Official/windows-camera-go`
2.  Πρόσβαση στο μικρόφωνο --> `github.com/gen2brain/malgo`
3.  Κωδικοποίηση βίντεο `H.264` --> `github.com/gen2brain/x264-go`
4.  Δυνατότητα λήψης screenshot --> `github.com/kbinani/screenshot`
5.  Χρήση πρωτοκόλλου MessagePack που είδαμε στο άρθρο με τον ColdClient. --> `github.com/vmihailenco/msgpack`
6.  Χρήση WebSocket για επικοινωνία με τον C2 --> `nhooyr.io/websocket`
7.  Παρουσία WebAssembly που επιτρέπει την προσθήκη modules τα οποία θα δίνουν στον ιό διαφορετικές δυνατότητες

Επιπροσθέτως παρατηρούμε και την εντολή που ουσιαστικά έκανε compile τον ιό με παραμέτρους οι οποίες είναι σχεδιασμένες να αφαιρούν κάποιες χρήσιμες, για την μετέπειτα ανάλυση, πληροφορίες όπως το `-s` ,`-w` και `noprint`.


# ΣΤΟΙΧΕΙΟ 3

Σε περίπτωση που κάποιος δεν έχει πειστεί παραθέτω και τρίτο στοιχείο πάλι με την βοήθεια του Ghidra.
![Screenshot](/images/hunting_scammers_s01e06/overlord_indicator_2.png)

Είναι, λοιπόν, εμφανέστατες οι ενδείξεις του Overlord και σε αυτό το αρχείο.


# ΣΥΜΠΕΡΑΣΜΑ

Δεύτερη φορά που τον συναντάμε και μάλιστα από την ίδια πηγή. Σίγουρα δεν θα είναι η τελευταία αφού πρόκειται για μια ανερχόμενη απειλή. Είμαι σίγουρος πως σε λίγο καιρό θα βρίσκεται στο Top10 των Malware Trends του Anyrun και θα μιλάνε πολλοί για αυτόν. Θυμηθείτε ότι τώρα βρίσκεται σε beta...