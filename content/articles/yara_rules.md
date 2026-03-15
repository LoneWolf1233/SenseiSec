---
title: Yara
date: 15/03/2026
category: Tool
description: Κανόνες για τα δύο τελευταία δείγματα
link: https://github.com/LoneWolf1233/Yara-Rules
---

Μετά την ανακάλυψη δύο καινούριων ιών, έχουμε και τους δύο πρώτους κανόνες Yara που εντοπίζουν αυτούς τους ιούς. Θα τους βρείτε παρακάτω ή και στο [Github](https://github.com/LoneWolf1233/Yara-Rules) μου.

Αν τους πάρετε από κάτω, απλά κάντε αντιγραφή και επικόλληση σε ένα αρχείο κειμένου. Το αρχείο αυτό θα το σώσετε με κατάληξη `.yara`

Για να τους χρησιμοποιήσετε θα πρέπει να κατεβάσετε το [Yara](https://github.com/virustotal/yara/releases). Μετά εκτελείτε την ακόλουθη εντολή:
```
yara -r rule.yara [μονοπάτι/προς/αρχείο]
```

Εάν εντοπιστεί κάτι μεμπτό τότε θα εμφανίσει τον τίτλο του rule. Αν όχι τότε δεν θα εμφανίσει τίποτα. 
# Overlord RAT

```yara
rule Overlord
{
    meta:
        description = "Overlord RAT"
        author = "Sensei Whou"
        date = "15/03/2026"
    strings:
        $agent1 = "overlord-client"
        $agent2 = "overlord-client/cmd/agent"
        $wire = "overlord-client/cmd/agent/wire"
        $config = "overlord-client/cmd/agent/config"
        $runtime = "!overlord-client/cmd/agent/runtime"
        $capture = "!overlord-client/cmd/agent/capture"
        $plugins = "!overlord-client/cmd/agent/plugins"
        $console = "!overlord-client/cmd/agent/console"
        $handlers = "overlord-client/cmd/agent/handlers"
        $keylogger = "#overlord-client/cmd/agent/keylogger"
    condition:
        uint16(0) == 0x5A4D and
        2 of ($agent1, $agent2, $wire, $config, $runtime, $capture, $plugins, $console, $handlers, $keylogger)
}
```

# Cold Malware/RAT/Stealer

```yara
rule Cold
{
    meta:
        description = "Cold C++ Loader/Stealer/RAT"
        author = "Sensei Whou"
        date = "15/03/2026"
    strings:
        $log_file = "gcold_debug.log"
        $mutex = "ColdMutex"
        $startup = "ColdStartup"
        $tag = "ColdTag"
        $under = "_Cold"
        $path = "\\Cold"
        $desktop = "ColdDesktop"
        $wallpaper = "cold_wallpaper_bmp"
        $bsod = "ColdFakeBsodClass"
        $client = "ColdClient/1.0"
        $msgpack = ".P6AXPEAVClient@net@cold@@AEAVMsgpackReader@msgpack@2@@Z"
    condition:
        uint16(0) == 0x5A4D and
        2 of ($log_file, $mutex, $startup, $tag, $under, $path, $desktop, $wallpaper, $bsod, $client, $msgpack)
}
```