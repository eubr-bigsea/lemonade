(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{249:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"installation"}},[e._v("Installation")]),e._v(" "),n("h2",{attrs:{id:"installing-the-latest-version"}},[e._v("Installing the latest version")]),e._v(" "),n("h2",{attrs:{id:"using-a-docker-container"}},[e._v("Using a Docker container")]),e._v(" "),n("p",[e._v("In the following Figure, Lemonade microservices are deployed as containers managed by Docker and by the underlying virtualization technology. Workflows in Lemonade are converted into PySpark code and runs on Apache Spark or COMPSs (under development), consuming resources in HDFS or in Ophidia (under development). In general, Lemonade's microservices do not require elasticity, because they are small applications and do not really execute any CPU or memory intensive code, this is responsibility of the underlying processing platform (COMPSs or Spark). As described in previous section, COMPSs PMES was modified in order to support Mesos and elasticity provided by QoS infrastructure. Spark itself is already integrated with Mesos.")]),e._v(" "),n("p",[n("img",{attrs:{src:"/img/image1.jpg",alt:"Docker installation",title:"Docker installation"}})]),e._v(" "),n("h3",{attrs:{id:"preparing-to-build"}},[e._v("Preparing to build")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:eubr-bigsea/docker-lemonade.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" docker-lemonade\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule update --remote\n\n")])])]),n("h3",{attrs:{id:"building-and-running"}},[e._v("Building and running")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker-compose up\n")])])]),n("p",[e._v("Running on detached mode:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker-compose up -d\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);