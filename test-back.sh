#!/bin/sh -
# compressed by gzexe
lines=19
prog=`/usr/bin/basename "$0"`
tmp=`/usr/bin/mktemp -d /tmp/gzexeXXXXXXXXXX` || {
/bin/echo "$prog: cannot create tmp dir"; exit 1
}
trap '/bin/rm -rf "$tmp"' 0
if /usr/bin/tail +$lines "$0" |
    /usr/bin/gzip -dc > "$tmp/$prog" 2> /dev/null; then
/bin/chmod u+x "$tmp/$prog"
"$tmp/$prog" ${1+"$@"}
ret=$?
else
/bin/echo "$prog: cannot decompress $0"
ret=1
fi
exit $ret
�m�[ test-back.sh M�QO�0���+j]�' �2	]G&�E�_H�nmJ�q�^Dg�t���/9�7N)Z�����$dJ�A�  �����\{��3*ϜJۨ�zg�-��� 6tR�����DiZ$Q^���$��,��fu�%��at�O#��\���?��Y�߮2�<��c��
�G�W��k����; �^|Ԥ�CԞ�@���*�:�t�dgD#�L��Ԕ��j꯶��Sm����e�pv���)�s&F .�+ 
�E  