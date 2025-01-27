
//% color="#7fd12c" icon="\uf2a1"
namespace decbase {

    let anmt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    //% blockid=decbase_dec2base
    //% block="convert $nvl in base $bvl|| to digit $dvl"
    //% group="main operation"
    //% weight=10
    export function decEncode(nvl: number, bvl: number, dvl: number=null): string {
        bvl = Math.max(nvl,0), bvl = Math.min(nvl,anmt.length-1)
        let sti = "", ani = nvl
        if (ani > 0) {
            while (ani > 0) {
                sti = "" + anmt.charAt(ani % bvl) + sti
                ani = Math.floor(ani / bvl)
                if (dvl != null && dvl > 0) { if (sti.length >= dvl) { break; } }
            }
        } else {
            sti = anmt.charAt(0)
        }
        if (dvl == null) return sti
        if (dvl <= 0) return sti
        if (sti.length > dvl) return sti
        if (dvl - sti.length > 0) {
            while (dvl - sti.length > 0) {
                sti = "" + anmt.charAt(0) + sti
            }
        }
        return sti
    }

    //% blockid=decbase_base2dec
    //% block="convert $tvl to dec in $bvl"
    //% group="main operation"
    //% weight=8
    export function decDecode(tvl: string, bvl: number): number {
        bvl = Math.max(nvl,0), bvl = Math.min(nvl,anmt.length-1)
        let stl = tvl.length, vld = 0, nvl = 0, vix = 0
        for (let nix = stl - 1; nix >= 0; nix--) {
            vix = anmt.indexOf(tvl.charAt(nix))
            if (vld == 0) {
                nvl += vix
                vld = bvl
            } else {
                nvl += vix * vld
                vld = vld * bvl
            }
        }
        return nvl
    }

    //% blockid=decbase_decsum
    //% block="sum decimal in $nvl and $bvl"
    //% group="sum operation"
    //% weight=6
    export function sumDecimal(nvl: number, bvl: number): number {
        let dvl = 0
        while (nvl >= dvl) {
            if (dvl == 0) {
                dvl = bvl
            } else {
                dvl = dvl * bvl
            }
        }
        return dvl
    }

    //% blockid=decbase_declensum
    //% block="Sum Digit At $nvl In $bvl"
    //% group="sum operation"
    //% weight=4
    export function sumDecDigit(nvl: number, bvl: number): number {
        let dvl = 0, dvi = 0
        while (nvl >= dvl) {
            if (dvl == 0) {
                dvi += 1
                dvl = bvl
            } else {
                dvi += 1
                dvl = dvl * bvl
            }
        }
        return dvl
    }

    //% blockid=decbase_binxor
    //% block="Bin Xor in $sva and $svb"
    //% group="xor operation"
    //% weight=10
    export function BinXor(sva: string, svb: string): string {
        let tvl = ""
        if (sva.length != svb.length) {
            return tvl
        }
        for (let six: number = 0; six < sva.length; six++) {
            if (sva.charAt(six) != svb.charAt(six)) {
                tvl = "" + tvl + "1"
            } else {
                tvl = "" + tvl + "0"
            }
        }
        return tvl
    }

    //% blockid=decbase_dec2bin
    //% block="dec convert $nvl to bin|| in $dvl"
    //% group="binary operation"
    //% weight=10
    export function dec2bin(nvl: number, dvl: number=null): string {
        return decEncode(nvl, 2, dvl)
    }

    //% blockid=decbase_bin2dec
    //% block="bin convert $tvl to dec"
    //% group="decimal operation"
    //% weight=10
    export function bin2dec(tvl: string): number {
        return decDecode(tvl, 2)
    }

    //% blockid=decbase_dec2hex
    //% block="dec convert $nvl to hex|| in $dvl"
    //% group="hexadecimal operation"
    //% weight=10
    export function dec2hex(nvl: number, dvl: number=null): string {
        return decEncode(nvl, 16, dvl)
    }

    //% blockid=decbase_hex2dec
    //% block="hex convert $tvl to dec"
    //% group="decimal operation"
    //% weight=8
    export function hex2dec(tvl: string): number {
        return decDecode(tvl, 16)
    }

    //% blockid=decbase_dec2oct
    //% block="dec convert $nvl to oct|| in $dvl"
    //% group="octal operation"
    //% weight=10
    export function dec2oct(nvl: number, dvl: number=null): string {
        return decEncode(nvl, 8, dvl)
    }

    //% blockid=decbase_oct2dec
    //% block="oct convert $tvl to dec"
    //% group="decimal operation"
    //% weight=6
    export function oct2dec(tvl: string): number {
        return decDecode(tvl, 2)
    }

    //% blockid=decbase_hex2bin
    //% block="hex convert $tvl to bin|| in $dvl"
    //% group="binary operation"
    //% weight=8
    export function hex2bin(tvl: string, dvl: number=null): string {
        return decEncode(decDecode(tvl, 16), 2)
    }

    //% blockid=decbase_oct2bin
    //% block="oct convert $tvl to bin|| in $dvl"
    //% group="binary operation"
    //% weight=6
    export function oct2bin(tvl: string, dvl: number=null): string {
        return decEncode(decDecode(tvl, 8), 2, dvl)
    }

    //% blockid=decbase_bin2hex
    //% block="bin convert $tvl to hex|| in $dvl"
    //% group="hexadecimal operation"
    //% weight=8
    export function bin2hex(tvl: string, dvl: number=null): string {
        return decEncode(decDecode(tvl, 2), 16)
    }

    //% blockid=decbase_oct2hex
    //% block="oct convert $tvl to hex|| in $dvl"
    //% group="hexadecimal operation"
    //% weight=6
    export function oct2hex(tvl: string, dvl: number=null): string {
        return decEncode(decDecode(tvl, 8), 16, dvl)
    }

    //% blockid=decbase_bin2oct
    //% block="bin convert $tvl to oct|| in $dvl"
    //% group="octal operation"
    //% weight=8
    export function bin2oct(tvl: string, dvl: number=null): string {
        return decEncode(decDecode(tvl, 2), 8)
    }

    //% blockid=decbase_hex2oct
    //% block="hex convert $tvl to oct|| in $dvl"
    //% group="octal operation"
    //% weight=6
    export function hex2oct(tvl: string, dvl: number=null): string {
        return decEncode(decDecode(tvl, 16), 8, dvl)
    }

    //% blockid=decbase_numxor
    //% block="Xor $nma ^ $nmb"
    //% group="xor operation"
    //% weight=5
    export function NumXor(nma: number, nmb: number): number {
        return nma ^ nmb
    }

    //% blockid=decbase_charidx
    //% block="Char code in $txt at $cidx"
    //% group="Charcter index"
    //% weight=10
    export function CharIdxAt(txt: string, cidx: number): number {
        return txt.charCodeAt(cidx)
    }

    function joinArrStr(astr:string[]):string {
        let ivstr = ""
        for (let val of astr) {
            ivstr = "" + ivstr + val
        }
        return ivstr
    }

    //% blockid=decbase_showbinled
    //% block="show number as bin $val in digit: $dvl to column: $col|| horizontal: $hzt"
    //% col.min=0 col.max=4 col.defl=0
    //% group="render screen"
    //% weight=10
    export function showBin(val:number,dvl:number,col:number,hzt:boolean=false) {
        let istr = decEncode(val,2,dvl).split("")
        istr.reverse()
        let ustr = joinArrStr(istr)
        for (let i = 0;i < ustr.length;i++) {
            const ix = i % 5
            const iy = Math.floor(i / 5)
            if (ustr.charAt(i) != "1") {
                if (hzt) {
                    led.unplot(ix,iy+col)
                } else {
                    led.unplot(iy+col,ix)
                }
            }
            if (ustr.charAt(i) == "1") {
                if (hzt) {
                    led.plot(ix,iy+col)
                } else {
                    led.plot(iy+col,ix)
                }
            }
        }
    }

    //% blockid=decbase_showhexled
    //% block="show number as hex $val in digit: $dvl to column: $col|| horizontal: $hzt"
    //% col.min=0 col.max=4 col.defl=0
    //% group="render screen"
    //% weight=4
    export function showHex(val:number,dvl:number,col:number,hzt:boolean=false) {
        let istr = decEncode(val,16,dvl).split("")
        istr.reverse()
        let ustr = joinArrStr(istr)
        let gled = Math.floor(256 / 16)
        for (let i = 0;i < ustr.length;i++) {
            const ix = i % 5
            const iy = Math.floor(i / 5)
            const inv = (anmt.indexOf(ustr.charAt(i)) * gled) - 1
            if (inv <= 0) {
                if (hzt) {
                    led.unplot(ix,iy+col)
                } else {
                    led.unplot(iy+col,ix)
                }
            }
            if (inv > 0) {
                if (hzt) {
                    led.plotBrightness(ix,iy+col,inv)
                } else {
                    led.plotBrightness(iy+col,ix,inv)
                }
            }
        }
    }

    //% blockid=decbase_showdecled
    //% block="show number as dec $val in digit: $dvl to column: $col|| horizontal: $hzt"
    //% col.min=0 col.max=4 col.defl=0
    //% group="render screen"
    //% weight=6
    export function showDec(val:number,dvl:number,col:number,hzt:boolean=false) {
        let istr = decEncode(val,10,dvl).split("")
        istr.reverse()
        let ustr = joinArrStr(istr)
        let gled = Math.floor(256 / 10)
        for (let i = 0;i < ustr.length;i++) {
            const ix = i % 5
            const iy = Math.floor(i / 5)
            const inv = (anmt.indexOf(ustr.charAt(i)) * gled) - 1
            if (inv <= 0) {
                if (hzt) {
                    led.unplot(ix,iy+col)
                } else {
                    led.unplot(iy+col,ix)
                }
            }
            if (inv > 0) {
                if (hzt) {
                    led.plotBrightness(ix,iy+col,inv)
                } else {
                    led.plotBrightness(iy+col,ix,inv)
                }
            }
        }
    }

    //% blockid=decbase_showoctled
    //% block="show number as oct $val in digit: $dvl to column: $col|| horizontal: $hzt"
    //% col.min=0 col.max=4 col.defl=0
    //% group="render screen"
    //% weight=8
    export function showOct(val:number,dvl:number,col:number,hzt:boolean=false) {
        let istr = decEncode(val,8,dvl).split("")
        istr.reverse()
        let ustr = joinArrStr(istr)
        let gled = Math.floor(256 / 8)
        for (let i = 0;i < ustr.length;i++) {
            const ix = i % 5
            const iy = Math.floor(i / 5)
            const inv = (anmt.indexOf(ustr.charAt(i)) * gled) - 1
            if (inv <= 0) {
                if (hzt) {
                    led.unplot(ix,iy+col)
                } else {
                    led.unplot(iy+col,ix)
                }
            }
            if (inv > 0) {
                if (hzt) {
                    led.plotBrightness(ix,iy+col,inv)
                } else {
                    led.plotBrightness(iy+col,ix,inv)
                }
            }
        }
    }
    
}
