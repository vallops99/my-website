{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils }:
    utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in rec
      {
        devShell = with pkgs; mkShell {
          buildInputs = [
            nodejs_24
            pre-commit
            wrangler
            cloudflared
            importNpmLock.hooks.linkNodeModulesHook
          ];

          npmDeps = importNpmLock.buildNodeModules {
            npmRoot = "${self}";
            inherit nodejs;
          };

          shellHook = ''
            export PATH=$PATH:${devShell.npmDeps}/node_modules/.bin
          '';
        };
      }
    );
}