function convertStringToNumbersInArray(arr) {
    // Проверяем, является ли переданное значение числом
    const isStringNumber = (value) => {
        return !isNaN(value) && !isNaN(parseFloat(value));
    };

    // Рекурсивная функция для обхода всех полей объекта
    const convertHelper = (obj) => {
        // Если obj является объектом, обрабатываем его поля
        if (typeof obj === 'object' && obj !== null) {
            for (let key in obj) {
                // Рекурсивно вызываем функцию для значений полей
                obj[key] = convertHelper(obj[key]);
            }
            return obj;
        } else if (typeof obj === 'string' && isStringNumber(obj)) {
            // Если значение является строкой, представляющей число, преобразуем его в число
            return parseFloat(obj);
        }
        // Если значение не является строкой, оставляем его как есть
        return obj;
    };

    // Проходимся по каждому элементу массива и вызываем рекурсивную функцию для обработки объектов
    for (let i = 0; i < arr.length; i++) {
        arr[i] = convertHelper(arr[i]);
    }

    return arr;
}


let data = [
    {
        "title": "Atom 230",
        "year": 2008,
        "Socket": "Десктопный",
        "core": "BGA438",
        "Количество потоков": "1",
        "Базовая частота": "2",
        "auto_overclocking": "1601",
        "L1": "нет",
        "Кэш L2, КБ": "32+24",
        "Кэш L3, КБ": "512",
        "Ядро": "нет",
        "Техпроцесс": "Diamondville",
        "Транзисторов, млн": "45",
        "TDP": "47",
        "temp": "4 ",
        "Шина": "85,2",
        "Встроенная графика": "533 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Atom 230",
        "year": 2009,
        "Socket": "Десктопный",
        "core": "BGA437",
        "Количество потоков": "1",
        "Базовая частота": "2",
        "auto_overclocking": "1830",
        "L1": "нет",
        "Кэш L2, КБ": "32+24",
        "Кэш L3, КБ": "512",
        "Ядро": "нет",
        "Техпроцесс": "Diamondville",
        "Транзисторов, млн": "45",
        "TDP": "47",
        "temp": "4",
        "Шина": "85,2",
        "Встроенная графика": "533 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Atom N270",
        "year": 2008,
        "Socket": "Мобильный",
        "core": "BGA437",
        "Количество потоков": "1",
        "Базовая частота": "2",
        "auto_overclocking": "2000",
        "L1": "нет",
        "Кэш L2, КБ": "32+24",
        "Кэш L3, КБ": "512",
        "Ядро": "нет",
        "Техпроцесс": "Diamondville",
        "Транзисторов, млн": "45",
        "TDP": "47",
        "temp": "2.5 ",
        "Шина": "90",
        "Встроенная графика": "667 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Bthlon 1100",
        "year": "2000",
        "Socket": "Десктопный",
        "core": "Socket 462",
        "Количество потоков": "1",
        "Базовая частота": "1",
        "auto_overclocking": "1100",
        "L1": "нет",
        "Кэш L2, КБ": "128",
        "Кэш L3, КБ": "256",
        "Ядро": "нет",
        "Техпроцесс": "Thunderbird",
        "Транзисторов, млн": "180",
        "TDP": "37",
        "temp": "60 ",
        "Шина": "95",
        "Встроенная графика": "200",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Athlon 1333",
        "year": "2001",
        "Socket": "Десктопный",
        "core": "Socket 462",
        "Количество потоков": "1",
        "Базовая частота": "1",
        "auto_overclocking": "1333",
        "L1": "нет",
        "Кэш L2, КБ": "128",
        "Кэш L3, КБ": "256",
        "Ядро": "нет",
        "Техпроцесс": "Thunderbird",
        "Транзисторов, млн": "180",
        "TDP": "37",
        "temp": "70 ",
        "Шина": "95",
        "Встроенная графика": "200",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Core 2 Extreme QX6700",
        "year": "2006",
        "Socket": "Десктопный",
        "core": "LGA775",
        "Количество потоков": "4",
        "Базовая частота": "4",
        "auto_overclocking": "2666",
        "L1": "нет",
        "Кэш L2, КБ": "32x4",
        "Кэш L3, КБ": "8192",
        "Ядро": "нет",
        "Техпроцесс": "Kentsfield-XE",
        "Транзисторов, млн": "65",
        "TDP": "582",
        "temp": "130 ",
        "Шина": "64,5",
        "Встроенная графика": "1066 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Ryzen 5 3500",
        "year": "2019",
        "Socket": "Десктопный",
        "core": "Socket AM4",
        "Количество потоков": "6",
        "Базовая частота": "6",
        "auto_overclocking": "3600",
        "L1": "до 4100",
        "Кэш L2, КБ": "6x32 + 6x32",
        "Кэш L3, КБ": "6x512",
        "Ядро": "16384",
        "Техпроцесс": "Matisse",
        "Транзисторов, млн": "7",
        "TDP": "4800",
        "temp": "65 ",
        "Шина": "нет",
        "Встроенная графика": "2-канальный(DDR4-3200)",
        "Контроллер памяти": "PCI Express 4.0(16 линий)",
        "Контроллер PCIe": "• MMX• SSE• SSE2• SSE3• SSSE3• SSE4• SSE4A• AES• AVX• AVX 2• BMI1•\n      F16C• FMA3• AMD64• EVP• AMD-V• SMAP• SMEP• Precision Boost 2"
    },
    {
        "title": "Atom 230",
        "year": 2008,
        "Socket": "Десктопный",
        "core": "BGA437",
        "Количество потоков": "1",
        "Базовая частота": "2",
        "auto_overclocking": "2500",
        "L1": "нет",
        "Кэш L2, КБ": "32+24",
        "Кэш L3, КБ": "512",
        "Ядро": "нет",
        "Техпроцесс": "Diamondville",
        "Транзисторов, млн": "45",
        "TDP": "47",
        "temp": "4 ",
        "Шина": "85,2",
        "Встроенная графика": "533 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Atom N270",
        "year": 2008,
        "Socket": "Мобильный",
        "core": "BGA437",
        "Количество потоков": "1",
        "Базовая частота": "2",
        "auto_overclocking": "1600",
        "L1": "нет",
        "Кэш L2, КБ": "32+24",
        "Кэш L3, КБ": "512",
        "Ядро": "нет",
        "Техпроцесс": "Diamondville",
        "Транзисторов, млн": "45",
        "TDP": "47",
        "temp": "2.5 ",
        "Шина": "90",
        "Встроенная графика": "667 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Athlon 1100",
        "year": "2000",
        "Socket": "Десктопный",
        "core": "Socket 462",
        "Количество потоков": "1",
        "Базовая частота": "1",
        "auto_overclocking": "1100",
        "L1": "нет",
        "Кэш L2, КБ": "128",
        "Кэш L3, КБ": "256",
        "Ядро": "нет",
        "Техпроцесс": "Thunderbird",
        "Транзисторов, млн": "180",
        "TDP": "37",
        "temp": "60 ",
        "Шина": "95",
        "Встроенная графика": "200",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Athlon 1333",
        "year": "2001",
        "Socket": "Десктопный",
        "core": "Socket 462",
        "Количество потоков": "1",
        "Базовая частота": "1",
        "auto_overclocking": "1333",
        "L1": "нет",
        "Кэш L2, КБ": "128",
        "Кэш L3, КБ": "256",
        "Ядро": "нет",
        "Техпроцесс": "Thunderbird",
        "Транзисторов, млн": "180",
        "TDP": "37",
        "temp": "70 ",
        "Шина": "95",
        "Встроенная графика": "200",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Core 2 Extreme QX6700",
        "year": "2006",
        "Socket": "Десктопный",
        "core": "LGA775",
        "Количество потоков": "4",
        "Базовая частота": "4",
        "auto_overclocking": "2666",
        "L1": "нет",
        "Кэш L2, КБ": "32x4",
        "Кэш L3, КБ": "8192",
        "Ядро": "нет",
        "Техпроцесс": "Kentsfield-XE",
        "Транзисторов, млн": "65",
        "TDP": "582",
        "temp": "130 ",
        "Шина": "64,5",
        "Встроенная графика": "1066 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Ryzen 5 3500",
        "year": "2019",
        "Socket": "Десктопный",
        "core": "Socket AM4",
        "Количество потоков": "6",
        "Базовая частота": "6",
        "auto_overclocking": "3600",
        "L1": "до 4100",
        "Кэш L2, КБ": "6x32 + 6x32",
        "Кэш L3, КБ": "6x512",
        "Ядро": "16384",
        "Техпроцесс": "Matisse",
        "Транзисторов, млн": "7",
        "TDP": "4800",
        "temp": "65 ",
        "Шина": "нет",
        "Встроенная графика": "2-канальный(DDR4-3200)",
        "Контроллер памяти": "PCI Express 4.0(16 линий)",
        "Контроллер PCIe": "• MMX• SSE• SSE2• SSE3• SSSE3• SSE4• SSE4A• AES• AVX• AVX 2• BMI1•\n      F16C• FMA3• AMD64• EVP• AMD-V• SMAP• SMEP• Precision Boost 2"
    },
    {
        "title": "Atom 230",
        "year": 2008,
        "Socket": "Десктопный",
        "core": "BGA437",
        "Количество потоков": "1",
        "Базовая частота": "2",
        "auto_overclocking": "3300",
        "L1": "нет",
        "Кэш L2, КБ": "32+24",
        "Кэш L3, КБ": "512",
        "Ядро": "нет",
        "Техпроцесс": "Diamondville",
        "Транзисторов, млн": "45",
        "TDP": "47",
        "temp": "4 ",
        "Шина": "85,2",
        "Встроенная графика": "533 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Atom N270",
        "year": 2008,
        "Socket": "Мобильный",
        "core": "BGA437",
        "Количество потоков": "1",
        "Базовая частота": "2",
        "auto_overclocking": "1600",
        "L1": "нет",
        "Кэш L2, КБ": "32+24",
        "Кэш L3, КБ": "512",
        "Ядро": "нет",
        "Техпроцесс": "Diamondville",
        "Транзисторов, млн": "45",
        "TDP": "47",
        "temp": "2.5 ",
        "Шина": "90",
        "Встроенная графика": "667 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Athlon 1100",
        "year": "2000",
        "Socket": "Десктопный",
        "core": "Socket 462",
        "Количество потоков": "1",
        "Базовая частота": "1",
        "auto_overclocking": "1100",
        "L1": "нет",
        "Кэш L2, КБ": "128",
        "Кэш L3, КБ": "256",
        "Ядро": "нет",
        "Техпроцесс": "Thunderbird",
        "Транзисторов, млн": "180",
        "TDP": "37",
        "temp": "60 ",
        "Шина": "95",
        "Встроенная графика": "200",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Athlon 1333",
        "year": "2001",
        "Socket": "Десктопный",
        "core": "Socket 462",
        "Количество потоков": "1",
        "Базовая частота": "1",
        "auto_overclocking": "1333",
        "L1": "нет",
        "Кэш L2, КБ": "128",
        "Кэш L3, КБ": "256",
        "Ядро": "нет",
        "Техпроцесс": "Thunderbird",
        "Транзисторов, млн": "180",
        "TDP": "37",
        "temp": "70 ",
        "Шина": "95",
        "Встроенная графика": "200",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Core 2 Extreme QX6700",
        "year": "2006",
        "Socket": "Десктопный",
        "core": "LGA775",
        "Количество потоков": "4",
        "Базовая частота": "4",
        "auto_overclocking": "2666",
        "L1": "нет",
        "Кэш L2, КБ": "32x4",
        "Кэш L3, КБ": "8192",
        "Ядро": "нет",
        "Техпроцесс": "Kentsfield-XE",
        "Транзисторов, млн": "65",
        "TDP": "582",
        "temp": "130 ",
        "Шина": "64,5",
        "Встроенная графика": "1066 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Ryzen 5 3500",
        "year": "2019",
        "Socket": "Десктопный",
        "core": "Socket AM4",
        "Количество потоков": "6",
        "Базовая частота": "6",
        "auto_overclocking": "3600",
        "L1": "до 4100",
        "Кэш L2, КБ": "6x32 + 6x32",
        "Кэш L3, КБ": "6x512",
        "Ядро": "16384",
        "Техпроцесс": "Matisse",
        "Транзисторов, млн": "7",
        "TDP": "4800",
        "temp": "65 ",
        "Шина": "нет",
        "Встроенная графика": "2-канальный(DDR4-3200)",
        "Контроллер памяти": "PCI Express 4.0(16 линий)",
        "Контроллер PCIe": "• MMX• SSE• SSE2• SSE3• SSSE3• SSE4• SSE4A• AES• AVX• AVX 2• BMI1•\n      F16C• FMA3• AMD64• EVP• AMD-V• SMAP• SMEP• Precision Boost 2"
    },
    {
        "title": "Atom 230",
        "year": 2008,
        "Socket": "Десктопный",
        "core": "BGA437",
        "Количество потоков": "1",
        "Базовая частота": "2",
        "auto_overclocking": "3200",
        "L1": "нет",
        "Кэш L2, КБ": "32+24",
        "Кэш L3, КБ": "512",
        "Ядро": "нет",
        "Техпроцесс": "Diamondville",
        "Транзисторов, млн": "45",
        "TDP": "47",
        "temp": "4 ",
        "Шина": "85,2",
        "Встроенная графика": "533 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Atom N270",
        "year": 2008,
        "Socket": "Мобильный",
        "core": "BGA437",
        "Количество потоков": "1",
        "Базовая частота": "2",
        "auto_overclocking": "1600",
        "L1": "нет",
        "Кэш L2, КБ": "32+24",
        "Кэш L3, КБ": "512",
        "Ядро": "нет",
        "Техпроцесс": "Diamondville",
        "Транзисторов, млн": "45",
        "TDP": "47",
        "temp": "2.5 ",
        "Шина": "90",
        "Встроенная графика": "667 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Athlon 1100",
        "year": "2000",
        "Socket": "Десктопный",
        "core": "Socket 462",
        "Количество потоков": "1",
        "Базовая частота": "1",
        "auto_overclocking": "1100",
        "L1": "нет",
        "Кэш L2, КБ": "128",
        "Кэш L3, КБ": "256",
        "Ядро": "нет",
        "Техпроцесс": "Thunderbird",
        "Транзисторов, млн": "180",
        "TDP": "37",
        "temp": "60 ",
        "Шина": "95",
        "Встроенная графика": "200",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Athlon 1333",
        "year": "2001",
        "Socket": "Десктопный",
        "core": "Socket 462",
        "Количество потоков": "1",
        "Базовая частота": "1",
        "auto_overclocking": "1333",
        "L1": "нет",
        "Кэш L2, КБ": "128",
        "Кэш L3, КБ": "256",
        "Ядро": "нет",
        "Техпроцесс": "Thunderbird",
        "Транзисторов, млн": "180",
        "TDP": "37",
        "temp": "70 ",
        "Шина": "95",
        "Встроенная графика": "200",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Core 2 Extreme QX6700",
        "year": "2006",
        "Socket": "Десктопный",
        "core": "LGA775",
        "Количество потоков": "4",
        "Базовая частота": "4",
        "auto_overclocking": "2666",
        "L1": "нет",
        "Кэш L2, КБ": "32x4",
        "Кэш L3, КБ": "8192",
        "Ядро": "нет",
        "Техпроцесс": "Kentsfield-XE",
        "Транзисторов, млн": "65",
        "TDP": "582",
        "temp": "130 ",
        "Шина": "64,5",
        "Встроенная графика": "1066 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Ryzen 5 3500",
        "year": "2019",
        "Socket": "Десктопный",
        "core": "Socket AM4",
        "Количество потоков": "6",
        "Базовая частота": "6",
        "auto_overclocking": "3600",
        "L1": "до 4100",
        "Кэш L2, КБ": "6x32 + 6x32",
        "Кэш L3, КБ": "6x512",
        "Ядро": "16384",
        "Техпроцесс": "Matisse",
        "Транзисторов, млн": "7",
        "TDP": "4800",
        "temp": "65 ",
        "Шина": "нет",
        "Встроенная графика": "2-канальный(DDR4-3200)",
        "Контроллер памяти": "PCI Express 4.0(16 линий)",
        "Контроллер PCIe": "• MMX• SSE• SSE2• SSE3• SSSE3• SSE4• SSE4A• AES• AVX• AVX 2• BMI1•\n      F16C• FMA3• AMD64• EVP• AMD-V• SMAP• SMEP• Precision Boost 2"
    },
    {
        "title": "Atom 230",
        "year": 2008,
        "Socket": "Десктопный",
        "core": "BGA437",
        "Количество потоков": "1",
        "Базовая частота": "2",
        "auto_overclocking": "1000",
        "L1": "нет",
        "Кэш L2, КБ": "32+24",
        "Кэш L3, КБ": "512",
        "Ядро": "нет",
        "Техпроцесс": "Diamondville",
        "Транзисторов, млн": "45",
        "TDP": "47",
        "temp": "4 ",
        "Шина": "85,2",
        "Встроенная графика": "533 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Atom N270",
        "year": 2008,
        "Socket": "Мобильный",
        "core": "BGA437",
        "Количество потоков": "1",
        "Базовая частота": "2",
        "auto_overclocking": "1600",
        "L1": "нет",
        "Кэш L2, КБ": "32+24",
        "Кэш L3, КБ": "512",
        "Ядро": "нет",
        "Техпроцесс": "Diamondville",
        "Транзисторов, млн": "45",
        "TDP": "47",
        "temp": "2.5 ",
        "Шина": "90",
        "Встроенная графика": "667 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Athlon 1100",
        "year": "2000",
        "Socket": "Десктопный",
        "core": "Socket 462",
        "Количество потоков": "1",
        "Базовая частота": "1",
        "auto_overclocking": "1100",
        "L1": "нет",
        "Кэш L2, КБ": "128",
        "Кэш L3, КБ": "256",
        "Ядро": "нет",
        "Техпроцесс": "Thunderbird",
        "Транзисторов, млн": "180",
        "TDP": "37",
        "temp": "60 ",
        "Шина": "95",
        "Встроенная графика": "200",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Athlon 1333",
        "year": "2001",
        "Socket": "Десктопный",
        "core": "Socket 462",
        "Количество потоков": "1",
        "Базовая частота": "1",
        "auto_overclocking": "1333",
        "L1": "нет",
        "Кэш L2, КБ": "128",
        "Кэш L3, КБ": "256",
        "Ядро": "нет",
        "Техпроцесс": "Thunderbird",
        "Транзисторов, млн": "180",
        "TDP": "37",
        "temp": "70 ",
        "Шина": "95",
        "Встроенная графика": "200",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Core 2 Extreme QX6700",
        "year": "2006",
        "Socket": "Десктопный",
        "core": "LGA775",
        "Количество потоков": "4",
        "Базовая частота": "4",
        "auto_overclocking": "2666",
        "L1": "нет",
        "Кэш L2, КБ": "32x4",
        "Кэш L3, КБ": "8192",
        "Ядро": "нет",
        "Техпроцесс": "Kentsfield-XE",
        "Транзисторов, млн": "65",
        "TDP": "582",
        "temp": "130 ",
        "Шина": "64,5",
        "Встроенная графика": "1066 FSB",
        "Контроллер памяти": "нет",
        "Контроллер PCIe": "нет(тип ОЗУ зависит от материнской платы)",
        "Поддержка инструкций и технологий": "нет(конфигурация PCIe зависит от материнской платы)"
    },
    {
        "title": "Ryzen 5 3500",
        "year": "2019",
        "Socket": "Десктопный",
        "core": "Socket AM4",
        "Количество потоков": "6",
        "Базовая частота": "6",
        "auto_overclocking": "3600",
        "L1": "до 4100",
        "Кэш L2, КБ": "6x32 + 6x32",
        "Кэш L3, КБ": "6x512",
        "Ядро": "16384",
        "Техпроцесс": "Matisse",
        "Транзисторов, млн": "7",
        "TDP": "4800",
        "temp": "65 ",
        "Шина": "нет",
        "Встроенная графика": "2-канальный(DDR4-3200)",
        "Контроллер памяти": "PCI Express 4.0(16 линий)",
        "Контроллер PCIe": "• MMX• SSE• SSE2• SSE3• SSSE3• SSE4• SSE4A• AES• AVX• AVX 2• BMI1•\n      F16C• FMA3• AMD64• EVP• AMD-V• SMAP• SMEP• Precision Boost 2"
    }
]

data = convertStringToNumbersInArray(data);