# 0704 JS 정리
Browse Programming I
- DOM
- BOM
- XmlHttpRequest

=>API(Native Programming, Pure JavaScript, Vanila Script)

--- 

# JS Library
### jQuery
![image](https://user-images.githubusercontent.com/50813232/177063705-c972c7f2-dc94-4d1e-b366-009e4ebc696d.png)
![image](https://user-images.githubusercontent.com/50813232/177063794-e8735754-a652-4335-86ec-721a091e7d70.png)
**node = JS 엔진**   

```javascript
var BrowserDetect = {
		init: function () {
			this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
			this.version = this.searchVersion(navigator.userAgent)
				|| this.searchVersion(navigator.appVersion)
				|| "an unknown version";
			this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
    ...
}
```