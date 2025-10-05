TERMUX_PKG_HOMEPAGE=https://github.com/yamsergey/yamsergey.adt
TERMUX_PKG_DESCRIPTION="Android Development Tools - CLI for Android project analysis and workspace generation"
TERMUX_PKG_LICENSE="Apache-2.0"
TERMUX_PKG_MAINTAINER="@yamsergey"
TERMUX_PKG_VERSION="1.0.4"
TERMUX_PKG_SRCURL=https://github.com/yamsergey/yamsergey.adt/releases/download/${TERMUX_PKG_VERSION}/adt-cli-${TERMUX_PKG_VERSION}.tar.gz
TERMUX_PKG_SHA256=4d04b6509957300fa532796d57050d4874fbe54aa235f8da841c48a8d095dfc9
TERMUX_PKG_DEPENDS="openjdk-21"
TERMUX_PKG_BUILD_IN_SRC=true
TERMUX_PKG_PLATFORM_INDEPENDENT=true

termux_step_make_install() {
	# Remove Windows batch files if any
	rm -f ./adt-cli/bin/*.bat

	# Install to /opt/adt-cli
	rm -rf $TERMUX_PREFIX/opt/adt-cli
	mkdir -p $TERMUX_PREFIX/opt/adt-cli
	cp -r ./adt-cli/* $TERMUX_PREFIX/opt/adt-cli/

	# Create symlink in bin
	ln -sfr $TERMUX_PREFIX/opt/adt-cli/bin/adt-cli $TERMUX_PREFIX/bin/adt-cli
}
