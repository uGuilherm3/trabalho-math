var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var placasDF = [
            "JDP", "JDQ", "JDR", "JDS", "JDT", "JDU", "JDV", "JDW", "JDX", "JDY", "JDZ",
            "JEP", "JEQ", "JER", "JES", "JET", "JEU", "JEV", "JEW", "JEX", "JEY", "JEZ",
            "JFP", "JFQ", "JFR", "JFS", "JFT", "JFU", "JFV", "JFW", "JFX", "JFY", "JFZ",
            "JGP", "JGQ", "JGR", "JGS", "JGT", "JGU", "JGV", "JGW", "JGX", "JGY", "JGZ",
            "JHP", "JHQ", "JHR", "JHS", "JHT", "JHU", "JHV", "JHW", "JHX", "JHY", "JHZ",
            "JIP", "JIQ", "JIR", "JIS", "JIT", "JIU", "JIV", "JIW", "JIX", "JIY", "JIZ",
            "JKP", "JKQ", "JKR"
        ];

        var placasMS = ["NRO", "NRP", "NRS", "NOR", "NOP", "NOS", "NPR", "NPO",
            "NPS", "NSR", "NSO", "NSP", "ORN", "ORP", "ORS", "OPR", "OPN", "OPS", "OSR",
            "OSP", "ONS", "SRN", "SRO", "SRP", "SON", "SOP", "SOR", "SPN", "SPO", "SPR"
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
                return `A placa ${placa} pertence ao Distrito Federal.`;
            } else if (placasMS.includes(placaGerada)) {
                return `A placa ${placa} pertence a Mato Grosso do Sul.`;
            } else if (placasMG.includes(placaGerada)) {
                return `A placa ${placa} pertence a Minas Gerais.`;
            } else {
                return `A placa ${placa} não pertence a nenhum dos três estados solicitados.`;
            }
        }