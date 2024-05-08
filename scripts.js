var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var placasDF = [
            "JDP", "JDQ", "JDR", "JDS", "JDT", "JDU", "JDV", "JDW", "JDX", "JDY", "JDZ",
            "JEP", "JEQ", "JER", "JES", "JET", "JEU", "JEV", "JEW", "JEX", "JEY", "JEZ",
            "JFP", "JFQ", "JFR", "JFS", "JFT", "JFU", "JFV", "JFW", "JFX", "JFY", "JFZ",
            "JGP", "JGQ", "JGR", "JGS", "JGT", "JGU", "JGV", "JGW", "JGX", "JGY", "JGZ",
            "JHP", "JHQ", "JHR", "JHS", "JHT", "JHU", "JHV", "JHW", "JHX", "JHY", "JHZ",
            "JIP", "JIQ", "JIR", "JIS", "JIT", "JIU", "JIV", "JIW", "JIX", "JIY", "JIZ",
            "JKP", "JKQ", "JKR",
            //
            "JDP","JDQ","JDR","JEP","JEQ","JER","JFP","JFQ","JFR","JGP","JGQ","JGR","JHP","JHQ","JHR","JIP","JIQ","JIR","JJP","JJQ","JJR","JKP","JKQ","JKR",
            //
            "OVM","OVN","OVO","OVP","OVQ","OVR","OVS","OVT","OVU","OVV",
            //
            "REC","RED","REE","REF","REG","REH","REI","REJ","REK","REL","REM","REN","REO","REP","REQ","RER","RES","RET","REU","REV"
        ];

        var placasMS = ["NRO", "NRP", "NRS", "NOR", "NOP", "NOS", "NPR", "NPO",
            "NPS", "NSR", "NSO", "NSP", "ORN", "ORP", "ORS", "OPR", "OPN", "OPS", "OSR",
            "OSP", "ONS", "SRN", "SRO", "SRP", "SON", "SOP", "SOR", "SPN", "SPO", "SPR",
            //
            "KAV","KAW","KAX","KAY","KAZ","KAA","KAB","KAC","KBV","KBW","KBX","KBY","KBZ","KBA","KBB","KBC","KCV","KCW","KCX",
            "KCY","KCZ","KCA","KCB","KCC","KDV","KDW","KDX","KDY","KDZ","KDA","KDB","KDC","KEV","KEW","KEX","KEY","KEZ","KEA",
            "KEB","KEC","KFV","KFW","KFX","KFY","KFZ","KFA","KFB","KFC",
            //
            "NFC","NFD","NFE","NFF","NFG","NFH","NFI","NFJ","NFK","NFL","NFM","NFN","NFO","NFP","NFQ","NFR","NFS","NFT","NFU",
            "NFV","NFW","NFX","NFY","NFZ","NGC","NGD","NGE","NGF","NGG","NGH","NGI","NGJ","NGK","NGL","NGM","NGN","NGO","NGP",
            "NGQ","NGR","NGS","NGT","NGU","NGV","NGW","NGX","NGY","NGZ",
            //
            "NJA","NJB","NJC","NJD","NJE","NJF","NJG","NJH","NJI","NJJ","NJK","NJL","NJM","NJN","NJO","NJP","NJQ","NJR","NJS",
            "NJT","NJU","NJX","NJY","NJZ","NKA","NKB","NKC","NKD","NKE","NKF","NKG","NKH","NKI","NKJ","NKK","NKL","NKM","NKN",
            "NKO","NKP","NKQ","NKR","NKS","NKT","NKU","NKX","NKY","NKZ","NLA","NLB","NLC","NLD","NLE","NLF","NLG","NLH","NLI",
            "NLJ","NLK","NLL","NLM","NLN","NLO","NLP","NLQ","NLR","NLS","NLT","NLU","NLX","NLY","NLZ",
            //
            "NVO","NVP","NVQ","NVR","NWO","NWP","NWQ","NWR",
            //
            "OGH","OGI","OGJ","OGK","OGL","OGM","OGN","OGO","OGP","OGQ","OGR","OGS","OGT","OGU","OGV","OGW","OGX","OGY","OGZ","OGA","OHH","OHI","OHJ","OHK","OHL","OHM","OHN","OHO","OHP","OHQ","OHR","OHS","OHT","OHU","OHV","OHW","OHX","OHY","OHZ","OHA",
            //
            "OMI","OMJ","OMK","OML","OMM","OMN","OMO","OMP","OMQ","OMR","OMS","OMT","OMU","OMV","OMW","OMX","OMY","OMZ","OMA","OMB","OMC","OMD","OME","OMF","ONI","ONJ","ONK","ONL","ONM","ONN","ONO","ONP","ONQ","ONR","ONS","ONT","ONU","ONV","ONW","ONX","ONY","ONZ","ONA","ONB","ONC","OND","ONE","ONF","OOI","OOJ","OOK","OOL","OOM","OON","OOO","OOP","OOQ","OOR","OOS","OOT","OOU","OOV","OOW","OOX","OOY","OOZ","OOA","OOB","OOC","OOD","OOE","OOF",
            //
            "PQA","PQB","PQC","PQD","PQE","PQF","PQG","PQH","PQI","PQJ","PQK","PQL","PQM","PQN","PQO","PQP","PQQ","PQR","PQS","PQT","PQU","PQV","PQW","PQX","PQY","PQZ","PRA","PRB","PRC","PRD","PRE","PRF","PRG","PRH","PRI","PRJ","PRK","PRL","PRM","PRN","PRO","PRP","PRQ","PRR","PRS","PRT","PRU","PRV","PRW","PRX","PRY","PRZ",
            //
            "QTN","QTO","QTP","QTQ","QTR","QTS",
            //
            "RBK","RBL","RBM","RBN","RCK","RCL","RCM","RCN",
            //
            "SBW","SBX","SBY","SBZ","SBA","SBB","SBC","SBD","SBE","SBF","SBG","SBH","SBI","SBJ","SBK","SBL","SBM","SBN","SBO","SBP","SBQ","SBR","SBS","SCW","SCX","SCY","SCZ","SCA","SCB","SCC","SCD","SCE","SCF","SCG","SCH","SCI","SCJ","SCK","SCL","SCM","SCN","SCO","SCP","SCQ","SCR","SCS","SDW","SDX","SDY","SDZ","SDA","SDB","SDC","SDD","SDE","SDF","SDG","SDH","SDI","SDJ","SDK","SDL","SDM","SDN","SDO","SDP","SDQ","SDR","SDS"
        ];

        var placasMG = [
            "OLO", "OLP", "OLQ", "OLR", "OLS", "OLT", "OLU", "OLV", "OLW", "OLX",
            "OLY", "OLZ", "OMA", "OMB", "OMC", "OMD", "OME", "OMF", "OMG", "OMH", "RTA",
            //
            "RTB","RTC","RTD","RTE","RTF","RTG","RTH","RTI","RTJ","RTK","RTL","RTM","RTN","RTO","RTP","RTQ","RTR","RTS","RTT","RTU","RTV","RTW","RTX","RTY","RTZ","RUA","RUB","RUC","RUD","RUE","RUF","RUG","RUH","RUI","RUJ","RUK","RUL","RUM","RUN","RUO","RUP","RUQ","RUR","RUS","RUT","RUU","RUV","RUW","RUX","RUY","RUZ","RVA","RVB","RVC","RVD","RVE","RVF","RVG","RVH","RVI","RVJ","RVK","RVL","RVM","RVN","RVO","RVP","RVQ","RVR","RVS","RVT","RVU","RVV","RVW","RVX","RVY","RVZ",
            // 
            "RMD","RME","RMF","RMG","RMH","RMI","RMJ","RMK","RML","RMM","RMN","RMO","RMP","RMQ","RMR","RMS","RMT","RMU","RMV","RMW","RMX","RMY","RMZ","RND","RNE","RNF","RNG","RNH","RNI","RNJ","RNK","RNL","RNM","RNN","RNO","RNP","RNQ","RNR","RNS","RNT","RNU","RNV","RNW","RNX","RNY","RNZ",
            //
            "RFA","RFB","RFC","RFD","RGA","RGB","RGC","RGD",
            //
            "QWR","QWS","QWT","QWU","QWV","QWW","QWX","QWY","QWZ","QXR","QXS","QXT","QXU","QXV","QXW","QXX","QXY","QXZ",
            //
            "QUA","QUB","QUC","QUD","QUE","QUF","QUG","QUH","QUI","QUJ","QUK","QUL","QUM","QUN","QUO","QUP","QUQ","QUR","QUS","QUT","QUU","QUV","QUW","QUX","QUY","QUZ",
            //
            "QMQ","QMR","QMS","QMT","QMU","QMV","QMW","QMX","QMY","QMZ","QNQ","QNR","QNS","QNT","QNU","QNV","QNW","QNX","QNY","QNZ","QOQ","QOR","QOS","QOT","QOU","QOV","QOW","QOX","QOY","QOZ","QPQ","QPR","QPS","QPT","QPU","QPV","QPW","QPX","QPY","QPZ","QQQ","QQR","QQS","QQT","QQU","QQV","QQW","QQX","QQY","QQZ",
            //
            "PUA","PUB","PUC","PUD","PUE","PUF","PUG","PUH","PUI","PUJ","PUK","PUL","PUM","PUN","PUO","PUP","PUQ","PUR","PUS","PUT","PUU","PUV","PUW","PUX","PUY","PUZ","PVA","PVB","PVC","PVD","PVE","PVF","PVG","PVH","PVI","PVJ","PVK","PVL","PVM","PVN","PVO","PVP","PVQ","PVR","PVS","PVT","PVU","PVV","PVW","PVX","PVY","PVZ","PWA","PWB","PWC","PWD","PWE","PWF","PWG","PWH","PWI","PWJ","PWK","PWL","PWM","PWN","PWO","PWP","PWQ","PWR","PWS","PWT","PWU","PWV","PWW","PWX","PWY","PWZ","PXA","PXB","PXC","PXD","PXE","PXF","PXG","PXH","PXI","PXJ","PXK","PXL","PXM","PXN","PXO","PXP","PXQ","PXR","PXS","PXT","PXU","PXV","PXW","PXX","PXY","PXZ","PYA","PYB","PYC","PYD","PYE","PYF","PYG","PYH","PYI","PYJ","PYK","PYL","PYM","PYN","PYO","PYP","PYQ","PYR","PYS","PYT","PYU","PYV","PYW","PYX","PYY","PYZ","PZA","PZB","PZC","PZD","PZE","PZF","PZG","PZH","PZI","PZJ","PZK","PZL","PZM","PZN","PZO","PZP","PZQ","PZR","PZS","PZT","PZU","PZV","PZW","PZX","PZY","PZZ",
            //
            "OWH","OWI","OWJ","OWK","OXH","OXI","OXJ","OXK",
            //
            "OOV","OOW","OOX","OOY","OOZ","OOA","OOB","OOC","OPV","OPW","OPX","OPY","OPZ","OPA","OPB","OPC","OQV","OQW","OQX","OQY","OQZ","OQA","OQB","OQC","ORV","ORW","ORX","ORY","ORZ","ORA","ORB","ORC",
            //
            "OLO","OLP","OLQ","OLR","OLS","OLT","OLU","OLV","OLW","OLX","OLY","OLZ","OLA","OLB","OLC","OLD","OLE","OLF","OLG","OLH","OMO","OMP","OMQ","OMR","OMS","OMT","OMU","OMV","OMW","OMX","OMY","OMZ","OMA","OMB","OMC","OMD","OME","OMF","OMG","OMH",
            //
            "NXX","NXY","NXZ","NXA","NXB","NXC","NXD","NXE","NXF","NXG","NYX","NYY","NYZ","NYA","NYB","NYC","NYD","NYE","NYF","NYG",
            //
            
        ];

        document.getElementById('placaForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que o formulário recarregue a página

            var placa = document.getElementById('placaInput').value.toUpperCase(); // Obtém o valor do campo da placa e converte para maiúsculas

            var estado = verificarPlaca(placa); // Chama a função verificarPlaca com a placa fornecida
            document.getElementById('resultado').innerText = estado; // Exibe o resultado na página
        });

        function verificarPlaca(placa) {
            var placaGerada = placa.substring(0, 3); // Obtém as três primeiras letras da placa

            if (placasDF.includes(placaGerada)) {
                console.log(placasDF.length + 1);
                return `A placa ${placa} pertence ao Distrito Federal.`;
            } else if (placasMS.includes(placaGerada)) {
                return `A placa ${placa} pertence a Mato Grosso do Sul.${console.log("São "+placasDF.length+1+" de possibilidades.")}`;
            } else if (placasMG.includes(placaGerada)) {
                return `A placa ${placa} pertence a Minas Gerais.${console.log("São ",+placasDF.length+1, +'de possibilidades.')}`;
            } else {
                return `A placa ${placa} não pertence a nenhum dos três estados solicitados.`;
            }
        }