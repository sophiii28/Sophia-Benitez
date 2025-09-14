 function detectar() {
            var $result;
             $result = navigator.appName;
            switch ($result) {
                case 'Microsoft Internet Explorer':
                    document.write($result);
                    window.open('http://www.microsoft.com/ie');
                    break;
                case 'Firefox':
                    document.write($result);
                    window.open('http://www.mozilla.com/firefox/');
                    break;
                case 'Konkeror':
                    document.write($result);
                    window.open('http://konqueror.org');
                    break;
                case 'Netscape':
                    document.write($result);
                    window.open('https://faiweb.uncoma.edu.ar/');
                    break;
                default:
                    document.write($result);
                    document.write('<br>Browser desconocido.');
                    break;
            }
        }