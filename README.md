HABmin2
=======

HABmin version2 - ultimately targeted toward openHAB2.

**BREAKING CHANGE:** I've now added ZWave support for the OpenHAB1 binding and therefore until there is a native
OpenHAB2 ZWave binding, the OpenHAB1 ZWave binding must be installed for HABmin2 to work under OpenHAB2.

An **OpenHAB2** bundle is now available with initial support for charting and some OH2 features such
as listing the newly discovered devices. I hope to keep a single source base that supports as many
OH1 and OH2 features as possible while OH2 is being developped.

The goal of HABmin2 is to provide a modern, professional and portable user interface for openHAB,
providing both user and administrative functions (eg sitemaps for users, and configuration utilities
to aid setup). It is written in such a way that it can be compiled as a native application for mobile
devices using [Apache Cordova](http://cordova.apache.org/). This provides a portable application that
with a small amount of work should run as a native application on a diverse range of devices.

To get a feel for the interface, check out an online version [here](http://cdjackson.github.io/HABmin2/#/home).
Note that this is a static site, so there will be errors, and dynamic content such as graphs etc won't work.

HABmin is intended as a complete GUI for the openHAB Home Automation system. It is in early and
[active development](https://github.com/cdjackson/HABmin2/blob/master/CHANGELOG.md), and as the
ultimate target is openHAB2, which is also being actively developed, features are varied.
In general, I'm focusing on features that I don't anticipate will change too much in OH2, or where
the changes on the server side will not greatly impact the client.


Features
========

* **Responsive**. Should work well on all devices. Of course some functions may be removed or be difficult to use on small devices (eg the graphical rule editor).
* **Theme-able**. Multiple themes are available - take your pick (currently 3 themes). If you want a different look, we're using [bootswatch](http://www.bootswatch.com) themes - vote for your favourite by [raising an issue](https://github.com/cdjackson/HABmin2/issues/new).
* **Charting**. Modern, fast charting of historical data.
* **Graphical rule editor**. No need to learn rule syntax.
* **International support**. Currently translated in English, Deutsch, Français. Add support for your language...
* Available as native app for **Android**.


Installation
============

### OpenHAB-2
For openHAB-2, download the _org.openhab.ui.habmin_ JAR file from either the
[releases folder](https://github.com/cdjackson/HABmin2/releases) or you can use the latest snapshot in the
the [working folder](https://github.com/cdjackson/HABmin2/tree/master/output) and place it in the ```addons``` folder.

**NOTE**. Currently HABmin2 supports a backward compatible mode for the OpenHAB1 ZWave binding. Therefore
  you must also install the OpenHAB1 zwave JAR into the ```addons``` folder. As soon as a OpenHAB2 ZWave binding
  is available, this dependency will be removed.

Then open your browser at http://openhab server/habmin/index.html or follow the link from the OpenHAB dashboard.

### OpenHAB-1
You need to install the [HABmin JAR](https://github.com/cdjackson/HABmin/blob/master/addons/org.openhab.io.habmin-1.7.0-SNAPSHOT.jar?raw=true) **AND** the [ZWave JAR](https://github.com/cdjackson/HABmin/blob/master/addons/org.openhab.binding.zwave-1.7.0-SNAPSHOT.jar?raw=true) from the [HABmin-1 repository](https://github.com/cdjackson/HABmin) and add them to your openHAB ```addons``` folder  (note that you can use any other recent zwave binding if you prefer). These files are needed no matter what installation you choose next - if you don't install these files, some things may work, but most won't (eg sitemaps might work, but charting etc won't). Note that the zwave binding is needed even if you don't have zwave installed - it won't do anything, but is needed to resolve some dependancies - this will be removed in openHAB2.  You also (currently) need to install HABmin version 1 since the HABmin JAR is using a few files in this repository (I know this is bad - I should remove this dependancy soon).

Packages are available for easy install - either for a web server (ie. installation into openHAB so you can use a browser), or as an Android app.

* You can download either the release version - grab the latest from the [releases folder](https://github.com/cdjackson/HABmin2/releases).
* Or, if you want the latest snapshot, grab it from the [working folder](https://github.com/cdjackson/HABmin2/tree/master/output).

Then grab the appropriate ZIP file from the [releases folder](https://github.com/cdjackson/HABmin2/releases) or the latest snapshot from the [working folder](https://github.com/cdjackson/HABmin2/tree/master/output). Generally the ```-release``` version, however a ```-debug``` version is also supplied.  Unzip the file into a folder webapps/habmin2 in your openhab installation folder.

Then open the browser at http://openhab server/habmin2.

### Android
The release also contains an Android package (```apk``` file) - this can be downloaded to an Android device - no further installation is required in openhab (other than the JAR files mentioned above). When the app starts, it should ask you for server and login credentials. I'm still trying to get the reconnection sorted, so it's possible that you may need to log out, and log on to get the connect back when you start again. Please feel free to open an issue and report your findings.

Screenshots
===========
The following images show a selection of screenshots. Note that the theme is user selectable, although most images are shown with a dark (*slate*) theme (except the mobile sitemap image).

Graphing a saved chart...

![charting](https://github.com/cdjackson/HABmin2/wiki/screenshots/charting-saved.png)


Editing a saved chart...

![charting-editor](https://github.com/cdjackson/HABmin2/wiki/screenshots/charting-edit.png)


Editing rules (graphical editor)...

![rules-block](https://github.com/cdjackson/HABmin2/wiki/screenshots/rules-blocks.png)


Editing rules (text editor)...

![rules-source](https://github.com/cdjackson/HABmin2/wiki/screenshots/rules-source.png)


Dashboard view (Paper theme, French localisation)...

![dashboard](https://github.com/cdjackson/HABmin2/wiki/screenshots/dashboard.png)


ZWave device configuration...

![zwave-config](https://github.com/cdjackson/HABmin2/wiki/screenshots/zwave-config.png)


ZWave network routing diagram...

![zwave-network](https://github.com/cdjackson/HABmin2/wiki/screenshots/zwave-network.png)


Sitemaps (mobile view using *yeti* theme)...

![sitemap](https://github.com/cdjackson/HABmin2/wiki/screenshots/sitemap-mobile-yeti.png)


