import JwtServiceAdapter from "../../sessions/adapter/jwtService.adapter";
import JwtService from "../../sessions/services/jwt.service";
import JwtServicePort from "../../../domain/ports/jwtService.port";
import SignInToken from "../../../application/usecases/SignInToken";
import TokenController from "../../http/rest/controllers/token.controller";
import RedisService from "../../persistence/cache/service/redis.service";
import CardServicePort from "../../../domain/ports/cardService.port";
import CardServiceCacheAdapter from "../../persistence/cache/adapter/cardServiceCache.adapter";
import CreateCardToken from "../../../application/usecases/CreateCardToken";
import GetCardByToken from "../../../application/usecases/GetCardByToken";
import CardController from "../../http/rest/controllers/card.controller";
import VerifyToken from "../../../application/usecases/VerifyToken";

export const jwtService: JwtService = new JwtService();
export const redisService: RedisService = new RedisService();
export const tokenServiceAdapter: JwtServicePort = new JwtServiceAdapter(jwtService);
export const cardServiceCacheAdapter: CardServicePort = new CardServiceCacheAdapter(redisService);
export const signinToken: SignInToken = new SignInToken(tokenServiceAdapter);
export const verifyToken: VerifyToken = new VerifyToken(tokenServiceAdapter);
export const createCardToken: CreateCardToken = new CreateCardToken(cardServiceCacheAdapter, signinToken);
export const getCardByToken: GetCardByToken = new GetCardByToken(cardServiceCacheAdapter, verifyToken);

export const tokenController: TokenController = new TokenController(createCardToken);
export const cardController: CardController = new CardController(getCardByToken);
