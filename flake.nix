{
  description = "Lara - Next.js and Anchor development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_22
            pnpm
            # Rust for Anchor
            rustc
            cargo
            rustfmt
            # Solana & Anchor
            solana-cli
            anchor
            # Common C/C++ dependencies sometimes needed by build scripts
            pkg-config
            openssl
            udev
          ];

          shellHook = ''
            export PATH=$PWD/node_modules/.bin:$PATH
            export PRISMA_MIGRATION_ENGINE_BINARY="${pkgs.prisma-engines}/bin/migration-engine"
            export PRISMA_QUERY_ENGINE_BINARY="${pkgs.prisma-engines}/bin/query-engine"
            export PRISMA_QUERY_ENGINE_LIBRARY="${pkgs.prisma-engines}/lib/libquery_engine.node"
            export PRISMA_INTROSPECTION_ENGINE_BINARY="${pkgs.prisma-engines}/bin/introspection-engine"
            export PRISMA_FMT_BINARY="${pkgs.prisma-engines}/bin/prisma-fmt"
            
            echo "Lara Dev Environment loaded!"
            echo "Node: $(node --version)"
            echo "pnpm: $(pnpm --version || echo 'Not installed')"
          '';
        };
      }
    );
}
