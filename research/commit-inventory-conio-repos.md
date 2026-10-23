# Commit inventory: Client A (regulated crypto/fintech) repositories

Anonymized summary for wayfinder ticket #3. All work below is **Shipped work** for a single **Client**, kept anonymous. Full internal detail (repo names, commit references, per-repo counts) lives only in a private local file and is deliberately not published.

## Gist

Valerio (they/them) has sustained, multi-year backend commit Evidence across a large microservice estate, from late 2023 to the present. They are the main author of several services, a founding author of one, and a contributor to many more. Work spans new service design, platform/infra, serverless APIs, and fleet-wide build modernisation.

## Authorship

- Two author identities, both clearly Valerio's (a personal email and a Client-issued email).
- Work is spread over many repositories; a handful carry most of the weight, with the rest being small contributions (dependency bumps, build changes, settings).
- Ownership ranges from creator or main author on a few services, to a meaningful minority share on shared core services, to minor contributor on the rest.
- Almost all repositories are private. Only a couple of open-source forks are public, with small contributions. Every Case study therefore stays anonymous.

## Cross-repo themes

1. New services built from scratch or largely alone (billing/subscriptions, money-transfer, outbound crypto sends, an identity BFF).
2. Platform/infra: Kubernetes, GitOps, service mesh, canary releases, Nix-based dev shells.
3. Expansion into Go alongside a Python core.
4. Fleet-wide build and CI modernisation (modern Python packaging, multi-stage Docker, task runners, linting/type-checking, containerised integration tests).
5. Fintech/crypto domain: Bitcoin transfers (fees, dust handling), exchange and custody integrations, regulatory compliance checks, tax-relevance logic, card-payment subscriptions, identity.
6. Serverless API layer: AWS Lambda, API Gateway, OpenAPI.
7. gRPC/protobuf service contracts with generated clients in Python and Go.
8. Event-driven design with Kafka and Redis.

## Ranked shortlist of candidate Accomplishments

Ranked by impact, then technical depth, then ownership; commit volume only breaks ties. Internal Evidence is kept privately.

| # | Anonymized framing | Ownership |
|---|---|---|
| 1 | Designed and built a subscription and recurring-billing service for a regulated fintech, covering plans, renewals, promotions and payment events. | Main author |
| 2 | Built a compliant crypto-withdrawal flow with regulatory validation for a regulated fintech. | Main author |
| 3 | Set up a Kubernetes and GitOps delivery platform (multi-environment, service mesh, canary releases) for a fintech's new Go services. | Principal author of the platform repo; main author of a companion Go service |
| 4 | Built backend services valuing incoming crypto transfers and flagging their tax relevance, with document handling and async processing. | Significant author |
| 5 | Created a Bitcoin transfer service from scratch, including fee calculation and dust handling. | Creator and main author |
| 6 | Modernised the build, packaging and CI/CD of a fleet of Python microservices (modern packaging, multi-stage Docker, containerised integration tests). | Cross-repo contributor |
| 7 | Extended a crypto treasury and trading platform with new exchange/custody integrations and precise rebalancing logic. | Contributor (recent, ongoing) |
| 8 | Built serverless Go services exposing market data and monitoring metrics. | Co-creator |
| 9 | Implemented a referral-rewards engine and web login/signup flows for a fintech identity service. | Contributor |
| 10 | Maintained and extended a serverless API layer (Lambda, OpenAPI) serving mobile and web clients. | Long-term maintainer (supporting Evidence) |

Notes on use:
- Items 1 to 5 are the strongest Case study candidates (money movement, compliance, platform, ownership).
- Item 6 is best presented as a skills/practice Claim rather than a Case study.
- Item 10 is better as supporting Evidence for serverless/OpenAPI Claims than as a standalone story.
- A small contribution to a public open-source Serverless plugin fork exists; at most a one-line "open source" mention.

## Tech evidence matrix (technology to kind of repository)

| Technology | Where it shows up |
|---|---|
| Python | Most services, clients and BFF layer (primary language) |
| Go | Identity services, serverless market-data functions |
| gRPC / protobuf | Core services and generated client libraries |
| Kafka | Event consumers and partitioned services |
| PostgreSQL + Alembic migrations | Billing, send, tax, transfer, bookkeeping, identity services |
| Redis | Identity, tax, BFF and several core services |
| AWS Lambda / API Gateway / Serverless Framework | BFF layer, back-office, market-data functions |
| OpenAPI (design and codegen) | BFF layer, Go BFF, generated API clients |
| Kubernetes, Kustomize, Helm | Platform repo |
| GitOps/ArgoCD, service mesh, canary releases, Gateway API | Platform repo |
| Nix flakes | Platform repo, Go services, several Python services |
| Docker (multi-stage), Swarm | Shared base image and nearly all services |
| Jenkins and hosted CI pipelines | BFF layer, send, billing, identity services |
| Modern Python packaging, task runners, ruff/mypy/bandit | Fleet-wide |
| AWS ECR, S3 | Identity services, BFF layer |
| Secrets management (HashiCorp Vault) | Identity services, platform repo |
| Prometheus / Grafana | Market-data functions, platform repo, trading engine |
| Bitcoin and exchange/custody APIs | Transfer, broker, trading and wallet services |
| Regulatory compliance integrations | Send flow, BFF layer |
| Card-payment gateway integration | Billing service, BFF layer |
| Node.js | Serverless tooling and plugin fork |
| Elasticsearch | Search/bookkeeping services |

## Uncertainties

- Business impact (users, volume, revenue) is not recorded in git; ranking relies on inferred criticality.
- "Created it" is inferred where initial scaffolding was committed by someone else.
- Some recent work was AI-assisted; portfolio wording should stay honest about that.
- Which BFF features were Valerio's design versus implementation of others' specs was not verified.
