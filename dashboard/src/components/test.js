export default () => {
  return {
    audit: {
      high: [
        {
          findings: [
            {
              version: "2.0.10",
              paths: [
                "gulp>vinyl-fs>glob-stream>glob>minimatch",
                "gulp>vinyl-fs>glob-stream>minimatch",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-build>decompress>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-build>download>gulp-decompress>decompress>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-build>download>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-wrapper>download>gulp-decompress>decompress>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-wrapper>download>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-build>decompress>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-build>download>gulp-decompress>decompress>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-build>download>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-wrapper>download>gulp-decompress>decompress>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-wrapper>download>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-build>decompress>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-build>download>gulp-decompress>decompress>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-build>download>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-wrapper>download>gulp-decompress>decompress>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-wrapper>download>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-nodemon>gulp>vinyl-fs>glob-stream>glob>minimatch",
                "gulp-nodemon>gulp>vinyl-fs>glob-stream>minimatch",
                "imagemin-pngquant>pngquant-bin>bin-build>decompress>vinyl-fs>glob-stream>glob>minimatch",
                "imagemin-pngquant>pngquant-bin>bin-build>download>gulp-decompress>decompress>vinyl-fs>glob-stream>glob>minimatch",
                "imagemin-pngquant>pngquant-bin>bin-build>download>vinyl-fs>glob-stream>glob>minimatch",
                "imagemin-pngquant>pngquant-bin>bin-wrapper>download>gulp-decompress>decompress>vinyl-fs>glob-stream>glob>minimatch",
                "imagemin-pngquant>pngquant-bin>bin-wrapper>download>vinyl-fs>glob-stream>glob>minimatch"
              ],
              dev: true,
              optional: false,
              bundled: false
            },
            {
              version: "0.2.14",
              paths: [
                "gulp>vinyl-fs>glob-watcher>gaze>globule>glob>minimatch",
                "gulp>vinyl-fs>glob-watcher>gaze>globule>minimatch",
                "gulp-nodemon>gulp>vinyl-fs>glob-watcher>gaze>globule>glob>minimatch",
                "gulp-nodemon>gulp>vinyl-fs>glob-watcher>gaze>globule>minimatch"
              ],
              dev: true,
              optional: false,
              bundled: false
            }
          ],
          id: 118,
          created: "2016-05-25T16:37:20.000Z",
          updated: "2018-03-01T21:58:01.072Z",
          deleted: null,
          title: "Regular Expression Denial of Service",
          found_by: { name: "Nick Starke" },
          reported_by: { name: "Nick Starke" },
          module_name: "minimatch",
          cves: ["CVE-2016-10540"],
          vulnerable_versions: "<=3.0.1",
          patched_versions: ">=3.0.2",
          overview:
            "Affected versions of `minimatch` are vulnerable to regular expression denial of service attacks when user input is passed into the `pattern` argument of `minimatch(path, pattern)`.\n\n\n## Proof of Concept\n```\nvar minimatch = require(“minimatch”);\n\n// utility function for generating long strings\nvar genstr = function (len, chr) {\n  var result = “”;\n  for (i=0; i<=len; i++) {\n    result = result + chr;\n  }\n  return result;\n}\n\nvar exploit = “[!” + genstr(1000000, “\\\\”) + “A”;\n\n// minimatch exploit.\nconsole.log(“starting minimatch”);\nminimatch(“foo”, exploit);\nconsole.log(“finishing minimatch”);\n```",
          recommendation: "Update to version 3.0.2 or later.",
          references: "",
          access: "public",
          severity: "high",
          cwe: "CWE-400",
          metadata: {
            module_type: "Multi.Library",
            exploitability: 4,
            affected_components:
              "Internal::Code::Function::minimatch({type:'args', key:0, vector:{type:'string'}})"
          },
          url: "https://npmjs.com/advisories/118"
        },
        {
          findings: [
            {
              version: "2.3.2",
              paths: [
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>request>tough-cookie"
              ],
              dev: true,
              optional: true,
              bundled: true
            }
          ],
          id: 525,
          created: "2017-09-08T18:07:02.061Z",
          updated: "2019-02-12T18:22:08.671Z",
          deleted: null,
          title: "Regular Expression Denial of Service",
          found_by: { name: "Cristian-Alexandru Staicu" },
          reported_by: { name: "Cristian-Alexandru Staicu" },
          module_name: "tough-cookie",
          cves: ["CVE-2017-15010"],
          vulnerable_versions: "<2.3.3",
          patched_versions: ">=2.3.3",
          overview:
            "Affected versions of `tough-cookie` are susceptible to a regular expression denial of service.\n\nThe amplification on this vulnerability is relatively low - it takes around 2 seconds for the engine to execute on a malicious input which is 50,000 characters in length.\n\nIf node was compiled using the `-DHTTP_MAX_HEADER_SIZE` however, the impact of the vulnerability can be significant, as the primary limitation for the vulnerability is the default max HTTP header length in node.",
          recommendation: "Update to version 2.3.3 or later.",
          references:
            "[Issue #92](https://github.com/salesforce/tough-cookie/issues/92)",
          access: "public",
          severity: "high",
          cwe: "CWE-400",
          metadata: {
            module_type: "Network.Library",
            exploitability: 5,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/525"
        },
        {
          findings: [
            {
              version: "1.13.1",
              paths: [
                "@sendgrid/mail>@sendgrid/client>request>http-signature>sshpk",
                "request>http-signature>sshpk"
              ],
              dev: false,
              optional: false,
              bundled: false
            },
            {
              version: "1.13.0",
              paths: [
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>request>http-signature>sshpk"
              ],
              dev: true,
              optional: true,
              bundled: true
            }
          ],
          id: 606,
          created: "2018-04-24T22:25:08.333Z",
          updated: "2018-09-07T17:39:16.549Z",
          deleted: null,
          title: "Regular Expression Denial of Service",
          found_by: { name: "Сковорода Никита Андреевич" },
          reported_by: { name: "Сковорода Никита Андреевич" },
          module_name: "sshpk",
          cves: ["CVE-2018-3737"],
          vulnerable_versions: "<1.13.2 || >=1.14.0 <1.14.1",
          patched_versions: ">=1.13.2 < 1.14.0 || >=1.14.1",
          overview:
            "Versions of `sshpk` before 1.13.2 or 1.14.1 are vulnerable to regular expression denial of service when parsing crafted invalid public keys.",
          recommendation: "Update to version 1.13.2, 1.14.1 or later.",
          references:
            "- https://github.com/joyent/node-sshpk/blob/v1.13.1/lib/formats/ssh.js#L17\n- [HackerOne Report](https://hackerone.com/reports/319593)\n- https://github.com/joyent/node-sshpk/commit/46065d38a5e6d1bccf86d3efb2fb83c14e3f9957",
          access: "public",
          severity: "high",
          cwe: "CWE-400",
          metadata: {
            module_type: "",
            exploitability: 5,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/606"
        },
        {
          findings: [
            {
              version: "3.1.2",
              paths: [
                "@sendgrid/mail>@sendgrid/client>request>hawk>cryptiles",
                "request>hawk>cryptiles"
              ],
              dev: false,
              optional: false,
              bundled: false
            }
          ],
          id: 720,
          created: "2018-11-01T18:32:48.906Z",
          updated: "2018-11-02T21:39:11.618Z",
          deleted: null,
          title: "Insufficient Entropy",
          found_by: {
            link: "https://www.microsoft.com/en-us/msrc/msvr",
            name: "Microsoft Vulnerability Research"
          },
          reported_by: {
            link: "https://www.microsoft.com/en-us/msrc/msvr",
            name: "Microsoft Vulnerability Research"
          },
          module_name: "cryptiles",
          cves: ["CVE-2018-1000620"],
          vulnerable_versions: ">=3.1.0 <3.1.3 || >=4.0.0 <4.1.2",
          patched_versions: ">=3.1.3 <4.0.0 || >=4.1.2",
          overview:
            "Versions of `cryptiles` from version 3.1.0 through 3.1.2, and versions 4.0.0 to version 4.1.1 are vulnerable to insufficient entropy.  The `randomDigits` method generates digits that lack a perfect distribution over enough attempts.\n",
          recommendation: "Update to version 3.1.3 or 4.1.2 or later.",
          references:
            "- [GitHub Issue](https://github.com/hapijs/cryptiles/issues/34)\n- [security-wg](https://github.com/nodejs/security-wg/blob/master/vuln/npm/476.json)",
          access: "public",
          severity: "high",
          cwe: "CWE-331",
          metadata: {
            module_type: "",
            exploitability: 2,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/720"
        }
      ],
      low: [
        {
          findings: [
            {
              version: "1.1.7",
              paths: [
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-build>decompress>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-build>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-build>download>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-wrapper>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-wrapper>download>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-build>decompress>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-build>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-build>download>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-wrapper>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-wrapper>download>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-build>decompress>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-build>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-build>download>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-wrapper>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-wrapper>download>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "imagemin-pngquant>pngquant-bin>bin-build>decompress>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "imagemin-pngquant>pngquant-bin>bin-build>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "imagemin-pngquant>pngquant-bin>bin-build>download>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "imagemin-pngquant>pngquant-bin>bin-wrapper>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic",
                "imagemin-pngquant>pngquant-bin>bin-wrapper>download>vinyl-fs>glob-stream>micromatch>braces>expand-range>fill-range>randomatic"
              ],
              dev: true,
              optional: true,
              bundled: false
            }
          ],
          id: 157,
          created: "2016-11-09T20:03:19.000Z",
          updated: "2018-05-08T15:23:56.190Z",
          deleted: null,
          title: "Cryptographically Weak PRNG",
          found_by: { name: "Sven Slootweg" },
          reported_by: { name: "Sven Slootweg" },
          module_name: "randomatic",
          cves: ["CVE-2017-16028"],
          vulnerable_versions: "<3.0.0",
          patched_versions: ">=3.0.0",
          overview:
            "Affected versions of `randomatic` generate random values using a cryptographically weak psuedo-random number generator. This may result in predictable values instead of random values as intended.\r\n\r\n",
          recommendation: "Update to version 3.0.0 or later.\r\n",
          references:
            "- [Commit #4a52695](https://github.com/jonschlinkert/randomatic/commit/4a526959b3a246ae8e4a82f9c182180907227fe1#diff-b9cfc7f2cdf78a7f4b91a753d10865a2)",
          access: "public",
          severity: "low",
          cwe: "CWE-330",
          metadata: {
            module_type: "Multi.Library",
            exploitability: 5,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/157"
        },
        {
          findings: [
            {
              version: "2.6.8",
              paths: [
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>tar-pack>debug"
              ],
              dev: true,
              optional: true,
              bundled: true
            }
          ],
          id: 534,
          created: "2017-09-25T18:55:55.956Z",
          updated: "2018-05-16T19:37:43.686Z",
          deleted: null,
          title: "Regular Expression Denial of Service",
          found_by: { name: "Cristian-Alexandru Staicu" },
          reported_by: { name: "Cristian-Alexandru Staicu" },
          module_name: "debug",
          cves: ["CVE-2017-16137"],
          vulnerable_versions: "<= 2.6.8 || >= 3.0.0 <= 3.0.1",
          patched_versions: ">= 2.6.9 < 3.0.0 || >= 3.1.0",
          overview:
            "Affected versions of `debug` are vulnerable to regular expression denial of service when untrusted user input is passed into the `o` formatter. \n\nAs it takes 50,000 characters to block the event loop for 2 seconds, this issue is a low severity issue.",
          recommendation:
            "Version 2.x.x: Update to version 2.6.9 or later.\nVersion 3.x.x: Update to version 3.1.0 or later.\n",
          references:
            "- [Issue #501](https://github.com/visionmedia/debug/issues/501)\n- [PR #504](https://github.com/visionmedia/debug/pull/504)",
          access: "public",
          severity: "low",
          cwe: "CWE-400",
          metadata: {
            module_type: "",
            exploitability: 5,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/534"
        },
        {
          findings: [
            {
              version: "4.17.4",
              paths: ["mongoose>async>lodash", "gulp-uglify>lodash"],
              dev: false,
              optional: false,
              bundled: false
            },
            {
              version: "1.0.2",
              paths: [
                "gulp>vinyl-fs>glob-watcher>gaze>globule>lodash",
                "gulp-nodemon>gulp>vinyl-fs>glob-watcher>gaze>globule>lodash"
              ],
              dev: true,
              optional: false,
              bundled: false
            }
          ],
          id: 577,
          created: "2018-04-24T14:27:02.796Z",
          updated: "2018-04-24T14:27:13.049Z",
          deleted: null,
          title: "Prototype Pollution",
          found_by: { name: "Olivier Arteau (HoLyVieR)" },
          reported_by: { name: "Olivier Arteau (HoLyVieR)" },
          module_name: "lodash",
          cves: ["CVE-2018-3721"],
          vulnerable_versions: "<4.17.5",
          patched_versions: ">=4.17.5",
          overview:
            "Versions of `lodash` before 4.17.5 are vulnerable to prototype pollution. \n\nThe vulnerable functions are 'defaultsDeep', 'merge', and 'mergeWith' which allow a malicious user to modify the prototype of `Object` via `__proto__` causing the addition or modification of an existing property that will exist on all objects.\n\n",
          recommendation: "Update to version 4.17.5 or later.",
          references:
            "- [HackerOne Report](https://hackerone.com/reports/310443)",
          access: "public",
          severity: "low",
          cwe: "CWE-471",
          metadata: {
            module_type: "",
            exploitability: 1,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/577"
        },
        {
          findings: [
            {
              version: "1.3.0",
              paths: [
                "gulp>liftoff>findup-sync>micromatch>braces>snapdragon>base>mixin-deep",
                "gulp>liftoff>findup-sync>micromatch>extglob>expand-brackets>snapdragon>base>mixin-deep",
                "gulp>liftoff>findup-sync>micromatch>extglob>snapdragon>base>mixin-deep",
                "gulp>liftoff>findup-sync>micromatch>nanomatch>snapdragon>base>mixin-deep",
                "gulp>liftoff>findup-sync>micromatch>snapdragon>base>mixin-deep",
                "gulp-nodemon>gulp>liftoff>findup-sync>micromatch>braces>snapdragon>base>mixin-deep",
                "gulp-nodemon>gulp>liftoff>findup-sync>micromatch>extglob>expand-brackets>snapdragon>base>mixin-deep",
                "gulp-nodemon>gulp>liftoff>findup-sync>micromatch>extglob>snapdragon>base>mixin-deep",
                "gulp-nodemon>gulp>liftoff>findup-sync>micromatch>nanomatch>snapdragon>base>mixin-deep",
                "gulp-nodemon>gulp>liftoff>findup-sync>micromatch>snapdragon>base>mixin-deep",
                "gulp-nodemon>nodemon>chokidar>anymatch>micromatch>braces>snapdragon>base>mixin-deep",
                "gulp-nodemon>nodemon>chokidar>anymatch>micromatch>extglob>expand-brackets>snapdragon>base>mixin-deep",
                "gulp-nodemon>nodemon>chokidar>anymatch>micromatch>extglob>snapdragon>base>mixin-deep",
                "gulp-nodemon>nodemon>chokidar>anymatch>micromatch>nanomatch>snapdragon>base>mixin-deep",
                "gulp-nodemon>nodemon>chokidar>anymatch>micromatch>snapdragon>base>mixin-deep",
                "gulp-nodemon>nodemon>chokidar>braces>snapdragon>base>mixin-deep"
              ],
              dev: true,
              optional: false,
              bundled: false
            }
          ],
          id: 578,
          created: "2018-04-24T14:30:28.128Z",
          updated: "2018-04-24T14:30:47.982Z",
          deleted: null,
          title: "Prototype Pollution",
          found_by: { name: "Olivier Arteau (HoLyVieR)" },
          reported_by: { name: "Olivier Arteau (HoLyVieR)" },
          module_name: "mixin-deep",
          cves: ["CVE-2018-3719"],
          vulnerable_versions: "<1.3.1",
          patched_versions: ">=1.3.1",
          overview:
            "Versions of `mixin-deep` before 1.3.1 are vulnerable to prototype pollution via merging functions.",
          recommendation: "Update to version 1.3.1 or later.",
          references:
            "- [HackerOne Report](https://hackerone.com/reports/311236)",
          access: "public",
          severity: "low",
          cwe: "CWE-471",
          metadata: {
            module_type: "",
            exploitability: 1,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/578"
        },
        {
          findings: [
            {
              version: "0.4.2",
              paths: [
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-build>download>caw>get-proxy>rc>deep-extend",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-wrapper>download>caw>get-proxy>rc>deep-extend",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-build>download>caw>get-proxy>rc>deep-extend",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-wrapper>download>caw>get-proxy>rc>deep-extend",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-build>download>caw>get-proxy>rc>deep-extend",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-wrapper>download>caw>get-proxy>rc>deep-extend",
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>rc>deep-extend",
                "gulp-nodemon>nodemon>update-notifier>latest-version>package-json>registry-auth-token>rc>deep-extend",
                "gulp-nodemon>nodemon>update-notifier>latest-version>package-json>registry-url>rc>deep-extend",
                "imagemin-pngquant>pngquant-bin>bin-build>download>caw>get-proxy>rc>deep-extend",
                "imagemin-pngquant>pngquant-bin>bin-wrapper>download>caw>get-proxy>rc>deep-extend"
              ],
              dev: true,
              optional: true,
              bundled: false
            }
          ],
          id: 612,
          created: "2018-04-24T23:13:13.134Z",
          updated: "2018-05-08T01:46:15.050Z",
          deleted: null,
          title: "Prototype Pollution",
          found_by: { name: "Olivier Arteau (HoLyVieR)" },
          reported_by: { name: "Olivier Arteau (HoLyVieR)" },
          module_name: "deep-extend",
          cves: [],
          vulnerable_versions: "<=0.5.0",
          patched_versions: ">=0.5.1",
          overview:
            "Versions of `deep-extend` before 0.5.1 are vulnerable to prototype pollution.",
          recommendation: "Update to version 0.5.1 or later.",
          references:
            "- [HackerOne Report](https://hackerone.com/reports/311333)",
          access: "public",
          severity: "low",
          cwe: "CWE-471",
          metadata: {
            module_type: "",
            exploitability: 2,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/612"
        },
        {
          findings: [
            {
              version: "2.3.0",
              paths: [
                "gulp>liftoff>findup-sync>micromatch>braces",
                "gulp-nodemon>gulp>liftoff>findup-sync>micromatch>braces",
                "gulp-nodemon>nodemon>chokidar>anymatch>micromatch>braces",
                "gulp-nodemon>nodemon>chokidar>braces"
              ],
              dev: true,
              optional: false,
              bundled: false
            },
            {
              version: "1.8.5",
              paths: [
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-build>decompress>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-build>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-build>download>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-wrapper>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-wrapper>download>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-build>decompress>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-build>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-build>download>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-wrapper>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-wrapper>download>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-build>decompress>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-build>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-build>download>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-wrapper>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-wrapper>download>vinyl-fs>glob-stream>micromatch>braces",
                "imagemin-pngquant>pngquant-bin>bin-build>decompress>vinyl-fs>glob-stream>micromatch>braces",
                "imagemin-pngquant>pngquant-bin>bin-build>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces",
                "imagemin-pngquant>pngquant-bin>bin-build>download>vinyl-fs>glob-stream>micromatch>braces",
                "imagemin-pngquant>pngquant-bin>bin-wrapper>download>gulp-decompress>decompress>vinyl-fs>glob-stream>micromatch>braces",
                "imagemin-pngquant>pngquant-bin>bin-wrapper>download>vinyl-fs>glob-stream>micromatch>braces"
              ],
              dev: true,
              optional: true,
              bundled: false
            }
          ],
          id: 786,
          created: "2019-02-15T21:44:30.680Z",
          updated: "2019-04-02T18:18:29.356Z",
          deleted: null,
          title: "Regular Expression Denial of Service",
          found_by: { link: "", name: "Santosh Rao" },
          reported_by: { link: "", name: "Santosh Rao" },
          module_name: "braces",
          cves: [],
          vulnerable_versions: "<2.3.1",
          patched_versions: ">=2.3.1",
          overview:
            "Versions of `braces` prior to 2.3.1 are vulnerable to Regular Expression Denial of Service (ReDoS). Untrusted input may cause catastrophic backtracking while matching regular expressions. This can cause the application to be unresponsive leading to Denial of Service.",
          recommendation: "Upgrade to version 2.3.1 or higher.",
          references:
            "- [GitHub Commit](https://github.com/micromatch/braces/commit/abdafb0cae1e0c00f184abbadc692f4eaa98f451)",
          access: "public",
          severity: "low",
          cwe: "CWE-185",
          metadata: {
            module_type: "",
            exploitability: 4,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/786"
        }
      ],
      moderate: [
        {
          findings: [
            {
              version: "4.2.0",
              paths: [
                "@sendgrid/mail>@sendgrid/client>request>hawk>boom>hoek",
                "@sendgrid/mail>@sendgrid/client>request>hawk>cryptiles>boom>hoek",
                "@sendgrid/mail>@sendgrid/client>request>hawk>hoek",
                "@sendgrid/mail>@sendgrid/client>request>hawk>sntp>hoek",
                "request>hawk>boom>hoek",
                "request>hawk>cryptiles>boom>hoek",
                "request>hawk>hoek",
                "request>hawk>sntp>hoek"
              ],
              dev: false,
              optional: false,
              bundled: false
            },
            {
              version: "2.16.3",
              paths: [
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>hawk>boom>hoek",
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>hawk>cryptiles>boom>hoek",
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>hawk>hoek",
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>hawk>sntp>hoek",
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>request>hawk>boom>hoek",
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>request>hawk>cryptiles>boom>hoek",
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>request>hawk>hoek",
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>request>hawk>sntp>hoek"
              ],
              dev: true,
              optional: true,
              bundled: true
            }
          ],
          id: 566,
          created: "2018-04-20T21:25:58.421Z",
          updated: "2019-02-14T16:00:33.922Z",
          deleted: null,
          title: "Prototype Pollution",
          found_by: { name: "HoLyVieR" },
          reported_by: { name: "HoLyVieR" },
          module_name: "hoek",
          cves: [],
          vulnerable_versions: "<= 4.2.0 || >= 5.0.0 < 5.0.3",
          patched_versions: "> 4.2.0 < 5.0.0 || >= 5.0.3",
          overview:
            'Versions of `hoek` prior to 4.2.1 and 5.0.3 are vulnerable to prototype pollution.\n\nThe `merge` function, and the `applyToDefaults` and `applyToDefaultsWithShallow` functions which leverage `merge` behind the scenes, are vulnerable to a prototype pollution attack when provided an _unvalidated_ payload created from a JSON string containing the `__proto__` property.\n\nThis can be demonstrated like so:\n\n```javascript\nvar Hoek = require(\'hoek\');\nvar malicious_payload = \'{"__proto__":{"oops":"It works !"}}\';\n\nvar a = {};\nconsole.log("Before : " + a.oops);\nHoek.merge({}, JSON.parse(malicious_payload));\nconsole.log("After : " + a.oops);\n```\n\nThis type of attack can be used to overwrite existing properties causing a potential denial of service.',
          recommendation: "Update to version 4.2.1, 5.0.3 or later.",
          references: "",
          access: "public",
          severity: "moderate",
          cwe: "CWE-471",
          metadata: {
            module_type: "",
            exploitability: 5,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/566"
        },
        {
          findings: [
            {
              version: "0.4.3",
              paths: [
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-build>download>caw>tunnel-agent",
                "gulp-imagemin>imagemin-gifsicle>gifsicle>bin-wrapper>download>caw>tunnel-agent",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-build>download>caw>tunnel-agent",
                "gulp-imagemin>imagemin-jpegtran>jpegtran-bin>bin-wrapper>download>caw>tunnel-agent",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-build>download>caw>tunnel-agent",
                "gulp-imagemin>imagemin-optipng>optipng-bin>bin-wrapper>download>caw>tunnel-agent",
                "imagemin-pngquant>pngquant-bin>bin-build>download>caw>tunnel-agent",
                "imagemin-pngquant>pngquant-bin>bin-wrapper>download>caw>tunnel-agent"
              ],
              dev: true,
              optional: true,
              bundled: false
            }
          ],
          id: 598,
          created: "2018-04-24T20:30:16.099Z",
          updated: "2018-04-24T20:31:15.816Z",
          deleted: null,
          title: "Memory Exposure",
          found_by: { name: "Сковорода Никита Андреевич" },
          reported_by: { name: "Сковорода Никита Андреевич" },
          module_name: "tunnel-agent",
          cves: [],
          vulnerable_versions: "<0.6.0",
          patched_versions: ">=0.6.0",
          overview:
            "Versions of `tunnel-agent` before 0.6.0 are vulnerable to memory exposure.\n\nThis is exploitable if user supplied input is provided to the auth value and is a number.\n\nProof-of-concept:\n```js\nrequire('request')({\n  method: 'GET',\n  uri: 'http://www.example.com',\n  tunnel: true,\n  proxy:{\n    protocol: 'http:',\n    host:'127.0.0.1',\n    port:8080,\n    auth:USERSUPPLIEDINPUT // number\n  }\n});\n```",
          recommendation: "Update to version 0.6.0 or later.",
          references:
            "- [GitHub Commit #9ca95ec](https://github.com/request/tunnel-agent/commit/9ca95ec7219daface8a6fc2674000653de0922c0)\n- [Proof of Concept](https://gist.github.com/ChALkeR/fd6b2c445834244e7d440a043f9d2ff4)",
          access: "public",
          severity: "moderate",
          cwe: "CWE-20",
          metadata: {
            module_type: "",
            exploitability: 3,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/598"
        },
        {
          findings: [
            {
              version: "2.0.3",
              paths: [
                "gulp>liftoff>findup-sync>micromatch>braces>snapdragon>source-map-resolve>atob",
                "gulp>liftoff>findup-sync>micromatch>extglob>expand-brackets>snapdragon>source-map-resolve>atob",
                "gulp>liftoff>findup-sync>micromatch>extglob>snapdragon>source-map-resolve>atob",
                "gulp>liftoff>findup-sync>micromatch>nanomatch>snapdragon>source-map-resolve>atob",
                "gulp>liftoff>findup-sync>micromatch>snapdragon>source-map-resolve>atob",
                "gulp-nodemon>gulp>liftoff>findup-sync>micromatch>braces>snapdragon>source-map-resolve>atob",
                "gulp-nodemon>gulp>liftoff>findup-sync>micromatch>extglob>expand-brackets>snapdragon>source-map-resolve>atob",
                "gulp-nodemon>gulp>liftoff>findup-sync>micromatch>extglob>snapdragon>source-map-resolve>atob",
                "gulp-nodemon>gulp>liftoff>findup-sync>micromatch>nanomatch>snapdragon>source-map-resolve>atob",
                "gulp-nodemon>gulp>liftoff>findup-sync>micromatch>snapdragon>source-map-resolve>atob",
                "gulp-nodemon>nodemon>chokidar>anymatch>micromatch>braces>snapdragon>source-map-resolve>atob",
                "gulp-nodemon>nodemon>chokidar>anymatch>micromatch>extglob>expand-brackets>snapdragon>source-map-resolve>atob",
                "gulp-nodemon>nodemon>chokidar>anymatch>micromatch>extglob>snapdragon>source-map-resolve>atob",
                "gulp-nodemon>nodemon>chokidar>anymatch>micromatch>nanomatch>snapdragon>source-map-resolve>atob",
                "gulp-nodemon>nodemon>chokidar>anymatch>micromatch>snapdragon>source-map-resolve>atob",
                "gulp-nodemon>nodemon>chokidar>braces>snapdragon>source-map-resolve>atob"
              ],
              dev: true,
              optional: false,
              bundled: false
            }
          ],
          id: 646,
          created: "2018-05-16T16:30:34.348Z",
          updated: "2018-05-16T16:30:34.348Z",
          deleted: null,
          title: "Out-of-bounds Read",
          found_by: { name: "Сковорода Никита Андреевич" },
          reported_by: { name: "Сковорода Никита Андреевич" },
          module_name: "atob",
          cves: [],
          vulnerable_versions: "<=2.0.3",
          patched_versions: ">=2.1.0",
          overview:
            "Versions of `atob` before 2.1.0  uninitialized Buffers when number is passed in input on Node.js 4.x and below.",
          recommendation: "Update to version 2.1.0 or later.",
          references:
            "- [HackerOne Report](https://hackerone.com/reports/321686)",
          access: "public",
          severity: "moderate",
          cwe: "CWE-125",
          metadata: {
            module_type: "",
            exploitability: 2,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/646"
        },
        {
          findings: [
            {
              version: "2.0.0",
              paths: [
                "jsonwebtoken>jws>base64url",
                "jsonwebtoken>jws>jwa>base64url",
                "jsonwebtoken>jws>jwa>ecdsa-sig-formatter>base64url"
              ],
              dev: false,
              optional: false,
              bundled: false
            }
          ],
          id: 658,
          created: "2018-05-16T19:16:37.120Z",
          updated: "2018-05-16T19:17:38.115Z",
          deleted: null,
          title: "Out-of-bounds Read",
          found_by: { name: "Сковорода Никита Андреевич" },
          reported_by: { name: "Сковорода Никита Андреевич" },
          module_name: "base64url",
          cves: [],
          vulnerable_versions: "<3.0.0",
          patched_versions: ">=3.0.0",
          overview:
            "Versions of `base64url` before 3.0.0 are vulnerable to to out-of-bounds reads as it allocates uninitialized Buffers when number is passed in input on Node.js 4.x and below.",
          recommendation: "Update to version 3.0.0 or later.",
          references:
            '- [HackerOne Report](https://hackerone.com/reports/321687)\n- [PR #25](https://github.com/brianloveswords/base64url/pull/25")',
          access: "public",
          severity: "moderate",
          cwe: "CWE-125",
          metadata: {
            module_type: "",
            exploitability: 2,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/658"
        },
        {
          findings: [
            {
              version: "0.0.5",
              paths: [
                "@sendgrid/mail>@sendgrid/client>request>stringstream",
                "request>stringstream",
                "gulp-nodemon>nodemon>chokidar>fsevents>node-pre-gyp>request>stringstream"
              ],
              dev: false,
              optional: false,
              bundled: false
            }
          ],
          id: 664,
          created: "2018-05-16T19:39:37.463Z",
          updated: "2018-05-22T15:03:12.999Z",
          deleted: null,
          title: "Out-of-bounds Read",
          found_by: { name: "Сковорода Никита Андреевич" },
          reported_by: { name: "Сковорода Никита Андреевич" },
          module_name: "stringstream",
          cves: [],
          vulnerable_versions: "<=0.0.5",
          patched_versions: ">=0.0.6",
          overview:
            "All versions of `stringstream` are vulnerable to out-of-bounds read as it allocates uninitialized Buffers when number is passed in input stream on Node.js 4.x and below.",
          recommendation:
            "No fix is currently available for this vulnerability. It is our recommendation to not install or use this module if user input is being passed in to `stringstream`.\n",
          references:
            "- [HackerOne Report](https://hackerone.com/reports/321670)\n- https://github.com/mhart/StringStream/blob/v0.0.5/stringstream.js#L32",
          access: "public",
          severity: "moderate",
          cwe: "CWE-125",
          metadata: {
            module_type: "",
            exploitability: 2,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/664"
        },
        {
          findings: [
            {
              version: "0.3.0",
              paths: ["mongoose>mpath"],
              dev: false,
              optional: false,
              bundled: false
            }
          ],
          id: 779,
          created: "2019-02-06T00:59:55.303Z",
          updated: "2019-02-06T22:52:14.328Z",
          deleted: null,
          title: "Prototype Pollution",
          found_by: {
            link: "https://semmle.com/security",
            name: "Cristian-Alexandru Staicu"
          },
          reported_by: {
            link: "https://semmle.com/security",
            name: "Cristian-Alexandru Staicu"
          },
          module_name: "mpath",
          cves: ["CVE-2018-16490"],
          vulnerable_versions: "<0.5.1",
          patched_versions: ">=0.5.1",
          overview:
            "Versions of `mpath` before 0.5.1 are vulnerable to prototype pollution. Provided certain input `mpath` can add or modify properties of the `Object` prototype. These properties will be present on all objects.",
          recommendation: "Update to version `0.5.1` or later.",
          references:
            "- [HackerOne Report](https://hackerone.com/reports/390860)",
          access: "public",
          severity: "moderate",
          cwe: "CWE-471",
          metadata: {
            module_type: "",
            exploitability: 1,
            affected_components:
              "CVSS: CVSS:3.0/AV:A/AC:L/PR:N/UI:N/S:U/C:L/I:H/A:L"
          },
          url: "https://npmjs.com/advisories/779"
        },
        {
          findings: [
            {
              version: "4.17.4",
              paths: ["mongoose>async>lodash", "gulp-uglify>lodash"],
              dev: false,
              optional: false,
              bundled: false
            },
            {
              version: "1.0.2",
              paths: [
                "gulp>vinyl-fs>glob-watcher>gaze>globule>lodash",
                "gulp-nodemon>gulp>vinyl-fs>glob-watcher>gaze>globule>lodash"
              ],
              dev: true,
              optional: false,
              bundled: false
            }
          ],
          id: 782,
          created: "2019-02-13T16:16:53.770Z",
          updated: "2019-02-13T16:16:53.770Z",
          deleted: null,
          title: "Prototype Pollution",
          found_by: { link: "", name: "asgerf" },
          reported_by: { link: "", name: "asgerf" },
          module_name: "lodash",
          cves: ["CVE-2018-16487"],
          vulnerable_versions: "<4.17.11",
          patched_versions: ">=4.17.11",
          overview:
            "Versions of `lodash` before 4.17.5 are vulnerable to prototype pollution. \n\nThe vulnerable functions are 'defaultsDeep', 'merge', and 'mergeWith' which allow a malicious user to modify the prototype of `Object` via `{constructor: {prototype: {...}}}` causing the addition or modification of an existing property that will exist on all objects.\n\n",
          recommendation: "Update to version 4.17.11 or later.",
          references:
            "- [HackerOne Report](https://hackerone.com/reports/380873)",
          access: "public",
          severity: "moderate",
          cwe: "CWE-471",
          metadata: {
            module_type: "",
            exploitability: 3,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/782"
        },
        {
          findings: [
            {
              version: "3.10.0",
              paths: ["js-yaml", "gulp-imagemin>imagemin-svgo>svgo>js-yaml"],
              dev: false,
              optional: false,
              bundled: false
            },
            {
              version: "3.12.1",
              paths: [
                "c937226d93dd5d4afdb6dcee573be21713b82b9a04e85c9a0022e7ccf9e8131b>appmetrics>ibmapm-embed>ibmapm-restclient>kubernetes-client>js-yaml"
              ],
              dev: false,
              optional: false,
              bundled: true
            }
          ],
          id: 788,
          created: "2019-03-18T21:29:08.514Z",
          updated: "2019-03-21T20:31:05.113Z",
          deleted: null,
          title: "Denial of Service",
          found_by: {
            link: "https://sites.google.com/site/jensdietrich/",
            name: "Shawn Rasheed, Jens DIetrich"
          },
          reported_by: {
            link: "https://conf.researchr.org/profile/shawnrasheed",
            name: "Shawn Rasheed"
          },
          module_name: "js-yaml",
          cves: [],
          vulnerable_versions: "<3.13.0",
          patched_versions: ">=3.13.0",
          overview:
            "Versions `js-yaml` prior to 3.13.0 are vulnerable to Denial of Service. By parsing a carefully-crafted YAML file, the node process stalls and may exhaust system resources leading to a Denial of Service.",
          recommendation: "Upgrade to version 3.13.0.",
          references: "",
          access: "public",
          severity: "moderate",
          cwe: "CWE-400",
          metadata: {
            module_type: "",
            exploitability: 6,
            affected_components: ""
          },
          url: "https://npmjs.com/advisories/788"
        }
      ]
    },
    metadata: {
      vulnerabilities: {
        info: 0,
        low: 76,
        moderate: 54,
        high: 34,
        critical: 0
      },
      dependencies: 884,
      devDependencies: 15552,
      optionalDependencies: 9071,
      totalDependencies: 16448
    }
  };
};
