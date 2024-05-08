var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var placasDF = [
            "JDP", "JDQ", "JDR", "JDS", "JDT", "JDU", "JDV", "JDW", "JDX", "JDY", "JDZ", "JEP", "JEQ", "JER", "JES", "JET", "JEU", "JEV", "JEW", "JEX",
            "JEY", "JEZ", "JFP", "JFQ", "JFR", "JFS", "JFT", "JFU", "JFV", "JFW", "JFX", "JFY", "JFZ", "JGP", "JGQ", "JGR", "JGS", "JGT", "JGU", "JGV",
            "JGW", "JGX", "JGY", "JGZ", "JHP", "JHQ", "JHR", "JHS", "JHT", "JHU", "JHV", "JHW", "JHX", "JHY", "JHZ", "JIP", "JIQ", "JIR", "JIS", "JIT",
            "JIU", "JIV", "JIW", "JIX", "JIY", "JIZ", "JKP", "JKQ", "JKR", "OVM", "OVN", "OVO", "OVP", "OVQ", "OVR", "OVS", "OVT", "OVU", "OVV", "REC",
            "RED", "REE", "REF", "REG", "REH", "REI", "REJ", "REK", "REL", "REM", "REN", "REO", "REP", "REQ", "RER", "RES", "RET", "REU", "REV", "OZW",
            "OZX", "OZY", "OZZ", "PAA", "PAB", "PAC", "PAD", "PAE", "PAF", "PAG", "PAH", "PAI", "PAJ", "PAK", "PAL", "PAM", "PAN", "PAO", "PAP", "PAQ", 
            "PAR", "PAS", "PAT", "PAU", "PAV", "PAW", "PAX", "PAY", "PAZ", "PBA", "PBB", "PBC", "PBD", "PBE", "PBF", "PBG", "PBH", "PBI", "PBJ", "PBK", 
            "PBL", "PBM", "PBN", "PBO", "PBP", "PBQ", "PBR", "PBS", "PBT", "PBU", "PBV", "PBW", "PBX", "PBY", "PBZ"
        ];

        var placasGO = [
            "KAV", "KAW", "KAX", "KAY", "KAZ", "KAA", "KAB", "KAC", "KBV", "KBW", "KBX", "KBY", "KBZ", "KBA", "KBB", "KBC", "KCV", "KCW", "KCX",
            "KCY", "KCZ", "KCA", "KCB", "KCC", "KDV", "KDW", "KDX", "KDY", "KDZ", "KDA", "KDB", "KDC", "KEV", "KEW", "KEX", "KEY", "KEZ", "KEA",
            "KEB", "KEC", "KFV", "KFW", "KFX", "KFY", "KFZ", "KFA", "KFB", "KFC", "NFD", "NFE", "NFF", "NFG", "NFH", "NFI", "NFJ", "NFK", "NFL",
            "NFM", "NFN", "NFO", "NFP", "NFQ", "NFR", "NFS", "NFT", "NFU", "NFV", "NFW", "NFX", "NFY", "NFZ", "NGC", "NGD", "NGE", "NGF", "NGG",
            "NGH", "NGI", "NGJ", "NGK", "NGL", "NGM", "NGN", "NGO", "NGP", "NGQ", "NGR", "NGS", "NGT", "NGU", "NGV", "NGW", "NGX", "NGY", "NGZ",
            "NJA", "NJB", "NJC", "NJD", "NJE", "NJF", "NJG", "NJH", "NJI", "NJJ", "NJK", "NJL", "NJM", "NJN", "NJO", "NJP", "NJQ", "NJR", "NJS",
            "NJT", "NJU", "NJX", "NJY", "NJZ", "NKA", "NKB", "NKC", "NKD", "NKE", "NKF", "NKG", "NKH", "NKI", "NKJ", "NKK", "NKL", "NKM", "NKN",
            "NKO", "NKP", "NKQ", "NKR", "NKS", "NKT", "NKU", "NKX", "NKY", "NKZ", "NLA", "NLB", "NLC", "NLD", "NLE", "NLF", "NLG", "NLH", "NLI",
            "NLJ", "NLK", "NLL", "NLM", "NLN", "NLO", "NLP", "NLQ", "NLR", "NLS", "NLT", "NLU", "NLX", "NLY", "NLZ", "NVO", "NVP", "NVQ", "NVR",
            "NWO", "NWP", "NWQ", "NWR", "OGH", "OGI", "OGJ", "OGK", "OGL", "OGM", "OGN", "OGO", "OGP", "OGQ", "OGR", "OGS", "OGT", "OGU", "OGV",
            "OGW", "OGX", "OGY", "OGZ", "OGA", "OHH", "OHI", "OHJ", "OHK", "OHL", "OHM", "OHN", "OHO", "OHP", "OHQ", "OHR", "OHS", "OHT", "OHU",
            "OHV", "OHW", "OHX", "OHY", "OHZ", "OHA", "OMI", "OMJ", "OMK", "OML", "OMM", "OMN", "OMO", "OMP", "OMQ", "OMR", "OMS", "OMT", "OMU",
            "OMV", "OMW", "OMX", "OMY", "OMZ", "OMA", "OMB", "OMC", "OMD", "OME", "OMF", "ONI", "ONJ", "ONK", "ONL", "ONM", "ONN", "ONO", "ONP",
            "ONQ", "ONR", "ONS", "ONT", "ONU", "ONV", "ONW", "ONX", "ONY", "ONZ", "ONA", "ONB", "ONC", "OND", "ONE", "ONF", "OOI", "OOJ", "OOK",
            "OOL", "OOM", "OON", "OOO", "OOP", "OOQ", "OOR", "OOS", "OOT", "OOU", "OOV", "OOW", "OOX", "OOY", "OOZ", "OOA", "OOB", "OOC", "OOD",
            "OOE", "OOF", "PQA", "PQB", "PQC", "PQD", "PQE", "PQF", "PQG", "PQH", "PQI", "PQJ", "PQK", "PQL", "PQM", "PQN", "PQO", "PQP", "PQQ",
            "PQR", "PQS", "PQT", "PQU", "PQV", "PQW", "PQX", "PQY", "PQZ", "PRA", "PRB", "PRC", "PRD", "PRE", "PRF", "PRG", "PRH", "PRI", "PRJ",
            "PRK", "PRL", "PRM", "PRN", "PRO", "PRP", "PRQ", "PRR", "PRS", "PRT", "PRU", "PRV", "PRW", "PRX", "PRY", "PRZ", "QTN", "QTO", "QTP",
            "QTQ", "QTR", "QTS", "RBK", "RBL", "RBM", "RBN", "RCK", "RCL", "RCM", "RCN", "SBW", "SBX", "SBY", "SBZ", "SBA", "SBB", "SBC", "SBD",
            "SBE", "SBF", "SBG", "SBH", "SBI", "SBJ", "SBK", "SBL", "SBM", "SBN", "SBO", "SBP", "SBQ", "SBR", "SBS", "SCW", "SCX", "SCY", "SCZ",
            "SCA", "SCB", "SCC", "SCD", "SCE", "SCF", "SCG", "SCH", "SCI", "SCJ", "SCK", "SCL", "SCM", "SCN", "SCO", "SCP", "SCQ", "SCR", "SCS",
            "SDW", "SDX", "SDY", "SDZ", "SDA", "SDB", "SDC", "SDD", "SDE", "SDF", "SDG", "SDH", "SDI", "SDJ", "SDK", "SDL", "SDM", "SDN", "SDO",
            "SDP", "SDQ", "SDR", "SDS"
        ];

        var placasMG = [
            "RTB", "RTC", "RTD", "RTE", "RTF", "RTG", "RTH", "RTI", "RTJ", "RTK", "RTL", "RTM", "RTN", "RTO", "RTP", "RTQ", "RTR", "RTS", "RTT",
            "RTU", "RTV", "RTW", "RTX", "RTY", "RTZ", "RUA", "RUB", "RUC", "RUD", "RUE", "RUF", "RUG", "RUH", "RUI", "RUJ", "RUK", "RUL", "RUM",
            "RUN", "RUO", "RUP", "RUQ", "RUR", "RUS", "RUT", "RUU", "RUV", "RUW", "RUX", "RUY", "RUZ", "RVA", "RVB", "RVC", "RVD", "RVE", "RVF",
            "RVG", "RVH", "RVI", "RVJ", "RVK", "RVL", "RVM", "RVN", "RVO", "RVP", "RVQ", "RVR", "RVS", "RVT", "RVU", "RVV", "RVW", "RVX", "RVY",
            "RVZ", "RMD", "RME", "RMF", "RMG", "RMH", "RMI", "RMJ", "RMK", "RML", "RMM", "RMN", "RMO", "RMP", "RMQ", "RMR", "RMS", "RMT", "RMU",
            "RMV", "RMW", "RMX", "RMY", "RMZ", "RND", "RNE", "RNF", "RNG", "RNH", "RNI", "RNJ", "RNK", "RNL", "RNM", "RNN", "RNO", "RNP", "RNQ",
            "RNR", "RNS", "RNT", "RNU", "RNV", "RNW", "RNX", "RNY", "RNZ", "RFA", "RFB", "RFC", "RFD", "RGA", "RGB", "RGC", "RGD", "QWR", "QWS",
            "QWT", "QWU", "QWV", "QWW", "QWX", "QWY", "QWZ", "QXR", "QXS", "QXT", "QXU", "QXV", "QXW", "QXX", "QXY", "QXZ", "QUA", "QUB", "QUC",
            "QUD", "QUE", "QUF", "QUG", "QUH", "QUI", "QUJ", "QUK", "QUL", "QUM", "QUN", "QUO", "QUP", "QUQ", "QUR", "QUS", "QUT", "QUU", "QUV",
            "QUW", "QUX", "QUY", "QUZ", "QMQ", "QMR", "QMS", "QMT", "QMU", "QMV", "QMW", "QMX", "QMY", "QMZ", "QNQ", "QNR", "QNS", "QNT", "QNU",
            "QNV", "QNW", "QNX", "QNY", "QNZ", "QOQ", "QOR", "QOS", "QOT", "QOU", "QOV", "QOW", "QOX", "QOY", "QOZ", "QPQ", "QPR", "QPS", "QPT",
            "QPU", "QPV", "QPW", "QPX", "QPY", "QPZ", "QQQ", "QQR", "QQS", "QQT", "QQU", "QQV", "QQW", "QQX", "QQY", "QQZ", "PUA", "PUB", "PUC",
            "PUD", "PUE", "PUF", "PUG", "PUH", "PUI", "PUJ", "PUK", "PUL", "PUM", "PUN", "PUO", "PUP", "PUQ", "PUR", "PUS", "PUT", "PUU", "PUV",
            "PUW", "PUX", "PUY", "PUZ", "PVA", "PVB", "PVC", "PVD", "PVE", "PVF", "PVG", "PVH", "PVI", "PVJ", "PVK", "PVL", "PVM", "PVN", "PVO",
            "PVP", "PVQ", "PVR", "PVS", "PVT", "PVU", "PVV", "PVW", "PVX", "PVY", "PVZ", "PWA", "PWB", "PWC", "PWD", "PWE", "PWF", "PWG", "PWH",
            "PWI", "PWJ", "PWK", "PWL", "PWM", "PWN", "PWO", "PWP", "PWQ", "PWR", "PWS", "PWT", "PWU", "PWV", "PWW", "PWX", "PWY", "PWZ", "PXA",
            "PXB", "PXC", "PXD", "PXE", "PXF", "PXG", "PXH", "PXI", "PXJ", "PXK", "PXL", "PXM", "PXN", "PXO", "PXP", "PXQ", "PXR", "PXS", "PXT",
            "PXU", "PXV", "PXW", "PXX", "PXY", "PXZ", "PYA", "PYB", "PYC", "PYD", "PYE", "PYF", "PYG", "PYH", "PYI", "PYJ", "PYK", "PYL", "PYM",
            "PYN", "PYO", "PYP", "PYQ", "PYR", "PYS", "PYT", "PYU", "PYV", "PYW", "PYX", "PYY", "PYZ", "PZA", "PZB", "PZC", "PZD", "PZE", "PZF",
            "PZG", "PZH", "PZI", "PZJ", "PZK", "PZL", "PZM", "PZN", "PZO", "PZP", "PZQ", "PZR", "PZS", "PZT", "PZU", "PZV", "PZW", "PZX", "PZY",
            "PZZ", "OWH", "OWI", "OWJ", "OWK", "OXH", "OXI", "OXJ", "OXK", "OOV", "OOW", "OOX", "OOY", "OOZ", "OOA", "OOB", "OOC", "OPV", "OPW",
            "OPX", "OPY", "OPZ", "OPA", "OPB", "OPC", "OQV", "OQW", "OQX", "OQY", "OQZ", "OQA", "OQB", "OQC", "ORV", "ORW", "ORX", "ORY", "ORZ",
            "ORA", "ORB", "ORC", "OLO", "OLP", "OLQ", "OLR", "OLS", "OLT", "OLU", "OLV", "OLW", "OLX", "OLY", "OLZ", "OLA", "OLB", "OLC", "OLD",
            "OLE", "OLF", "OLG", "OLH", "OMO", "OMP", "OMQ", "OMR", "OMS", "OMT", "OMU", "OMV", "OMW", "OMX", "OMY", "OMZ", "OMA", "OMB", "OMC",
            "OMD", "OME", "OMF", "OMG", "OMH", "NXX", "NXY", "NXZ", "NXA", "NXB", "NXC", "NXD", "NXE", "NXF", "NXG", "NYX", "NYY", "NYZ", "NYA",
            "NYB", "NYC", "NYD", "NYE", "NYF", "NYG", "GKJ", "GKK", "GKL", "GKM", "GKN", "GKO", "GKP", "GKQ", "GKR", "GKS", "GKT", "GKU", "GKV",
            "GKW", "GKX", "GKY", "GKZ", "GLJ", "GLK", "GLL", "GLM", "GLN", "GLO", "GLP", "GLQ", "GLR", "GLS", "GLT", "GLU", "GLV", "GLW", "GLX",
            "GLY", "GLZ", "GMJ", "GMK", "GML", "GMM", "GMN", "GMO", "GMP", "GMQ", "GMR", "GMS", "GMT", "GMU", "GMV", "GMW", "GMX", "GMY", "GMZ",
            "GNJ", "GNK", "GNL", "GNM", "GNN", "GNO", "GNP", "GNQ", "GNR", "GNS", "GNT", "GNU", "GNV", "GNW", "GNX", "GNY", "GNZ", "GOJ", "GOK",
            "GOL", "GOM", "GON", "GOO", "GOP", "GOQ", "GOR", "GOS", "GOT", "GOU", "GOV", "GOW", "GOX", "GOY", "GOZ", "GPJ", "GPK", "GPL", "GPM",
            "GPN", "GPO", "GPP", "GPQ", "GPR", "GPS", "GPT", "GPU", "GPV", "GPW", "GPX", "GPY", "GPZ", "GQJ", "GQK", "GQL", "GQM", "GQN", "GQO",
            "GQP", "GQQ", "GQR", "GQS", "GQT", "GQU", "GQV", "GQW", "GQX", "GQY", "GQZ", "GRJ", "GRK", "GRL", "GRM", "GRN", "GRO", "GRP", "GRQ",
            "GRR", "GRS", "GRT", "GRU", "GRV", "GRW", "GRX", "GRY", "GRZ", "GSJ", "GSK", "GSL", "GSM", "GSN", "GSO", "GSP", "GSQ", "GSR", "GSS",
            "GST", "GSU", "GSV", "GSW", "GSX", "GSY", "GSZ", "GTJ", "GTK", "GTL", "GTM", "GTN", "GTO", "GTP", "GTQ", "GTR", "GTS", "GTT", "GTU",
            "GTV", "GTW", "GTX", "GTY", "GTZ", "GUJ", "GUK", "GUL", "GUM", "GUN", "GUO", "GUP", "GUQ", "GUR", "GUS", "GUT", "GUU", "GUV", "GUW",
            "GUX", "GUY", "GUZ", "GVJ", "GVK", "GVL", "GVM", "GVN", "GVO", "GVP", "GVQ", "GVR", "GVS", "GVT", "GVU", "GVV", "GVW", "GVX", "GVY",
            "GVZ", "GWJ", "GWK", "GWL", "GWM", "GWN", "GWO", "GWP", "GWQ", "GWR", "GWS", "GWT", "GWU", "GWV", "GWW", "GWX", "GWY", "GWZ", "GXJ",
            "GXK", "GXL", "GXM", "GXN", "GXO", "GXP", "GXQ", "GXR", "GXS", "GXT", "GXU", "GXV", "GXW", "GXX", "GXY", "GXZ", "GYJ", "GYK", "GYL",
            "GYM", "GYN", "GYO", "GYP", "GYQ", "GYR", "GYS", "GYT", "GYU", "GYV", "GYW", "GYX", "GYY", "GYZ", "GZJ", "GZK", "GZL", "GZM", "GZN",
            "GZO", "GZP", "GZQ", "GZR", "GZS", "GZT", "GZU", "GZV", "GZW", "GZX", "GZY", "GZZ", "HAA", "HAB", "HAC", "HAD", "HAE", "HAF", "HAG",
            "HAH", "HAI", "HAJ", "HAK", "HBA", "HBB", "HBC", "HBD", "HBE", "HBF", "HBG", "HBH", "HBI", "HBJ", "HBK", "HCA", "HCB", "HCC", "HCD",
            "HCE", "HCF", "HCG", "HCH", "HCI", "HCJ", "HCK", "HDA", "HDB", "HDC", "HDD", "HDE", "HDF", "HDG", "HDH", "HDI", "HDJ", "HDK", "HEA",
            "HEB", "HEC", "HED", "HEE", "HEF", "HEG", "HEH", "HEI", "HEJ", "HEK", "HFA", "HFB", "HFC", "HFD", "HFE", "HFF", "HFG", "HFH", "HFI",
            "HFJ", "HFK", "HGA", "HGB", "HGC", "HGD", "HGE", "HGF", "HGG", "HGH", "HGI", "HGJ", "HGK", "HHA", "HHB", "HHC", "HHD", "HHE", "HHF",
            "HHG", "HHH", "HHI", "HHJ", "HHK", "HIA", "HIB", "HIC", "HID", "HIE", "HIF", "HIG", "HIH", "HII", "HIJ", "HIK", "HJA", "HJB", "HJC",
            "HJD", "HJE", "HJF", "HJG", "HJH", "HJI", "HJJ", "HJK", "HKA", "HKB", "HKC", "HKD", "HKE", "HKF", "HKG", "HKH", "HKI", "HKJ", "HKK",
            "HLA", "HLB", "HLC", "HLD", "HLE", "HLF", "HLG", "HLH", "HLI", "HLJ", "HLK", "HMA", "HMB", "HMC", "HMD", "HME", "HMF", "HMG", "HMH",
            "HMI", "HMJ", "HMK", "HNA", "HNB", "HNC", "HND", "HNE", "HNF", "HNG", "HNH", "HNI", "HNJ", "HNK", "HOA", "HOB", "HOC", "HOD", "HOE",
            "HOF", "HOG", "HOH", "HOI", "HOJ", "HOK"
        ];

        document.getElementById('placaForm').addEventListener('submit', function(event) {
            event.preventDefault(); //Faz com que a pag n carregue

            var placa = document.getElementById('placaInput').value.toUpperCase(); //Faz com q letras minúsculas fiquem maiúsculas

            var estado = verificarPlaca(placa);
            document.getElementById('resultado').innerText = estado;
        });

        function verificarPlaca(placa) {
            var placaGerada = placa.substring(0, 3); //pega as 3 primeiras letras

            if (placasDF.includes(placaGerada)) {
                console.log(placasDF.length + 1 +" possibilidades.");
                return `A placa ${placa} pertence ao Distrito Federal.`;
            } else if (placasGO.includes(placaGerada)) {
                console.log(placasGO.length + 1 +" possibilidades.");
                return `A placa ${placa} pertence a Goiás.`;
            } else if (placasMG.includes(placaGerada)) {
                console.log(placasMG.length + 1 +" possibilidades.");
                return `A placa ${placa} pertence a Minas Gerais.`;
            } else {
                return `A placa ${placa} não pertence a nenhum dos três estados solicitados.`;
            }
        }