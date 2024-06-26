﻿const generatedBibEntries = {
    "10.1145/3155133.3155172": {
        "abstract": "Time series forecasting is often confronted with multivariate data, but few model is available in this situation. Besides, data distortion aggravates the difficulty to predict multivariate time series. To tackle such problems, we propose an approach based on convolutional neural network with a feature extraction layer added before convolution layer to extract multivariate features and handle multivariate time series data, as well as decreases the effect of distortion by transforming the sample into a denser representation with both its information and the information of its temporal neighbors. A full connection layer then fuses these extracted features and gets the final result. Given that events in the world are always related, using both the target time series and other related time series to forecast the future changes of the target dimension would achieve a better prediction. The proposed approach can process multivariate time series data and is robust to the number of samples, numeric ranges of data etc. Extensive experiments validate the effectiveness of the approach in accomplishing multivariate time series forecasting.",
        "address": "New York, NY, USA",
        "author": "Pang, Ning and Yin, Fengjing and Zhang, Xiaoyu and Zhao, Xiang",
        "booktitle": "Proceedings of the 8th International Symposium on Information and Communication Technology",
        "doi": "10.1145/3155133.3155172",
        "isbn": "9781450353281",
        "keywords": "multivariate time series, convolutional neural network, Feature extraction",
        "location": "Nha Trang City, Viet Nam",
        "numpages": "8",
        "pages": "106\u2013113",
        "publisher": "Association for Computing Machinery",
        "series": "SoICT '17",
        "title": "A Robust Approach for Multivariate Time Series Forecasting",
        "type": "Article Research Article",
        "url": "https://doi.org/10.1145/3155133.3155172",
        "year": "2017"
    },
    "10.1145/3357384.3357826": {
        "abstract": "Multivariate time series forecasting has wide applications such as traffic flow prediction, supermarket commodity demand forecasting and etc. In literature, Due to the complex temporal patterns and inter-dependencies among multivariate time series, a large number of forecasting models have been developed. However, one question still remains unclear: how these models perform on a certain forecasting task, and there is lack of comprehensive performance comparison of these models on different tasks. To this end, in this paper, we conduct a systematic evaluation of eight representative forecasting models over eight multivariate time series datasets, and have the following findings: 1) When the datasets exhibit strong periodic patterns, deep learning models perform best. Otherwise on the datasets in a non-periodic manner, the statistical models such as ARIMA perform best. 2) For the long term prediction involving a high horizon value, the direct prediction strategy could lead to lower errors than the recursive one, but at the cost of higher training time. 3) For the multivariate time series explicitly involving graphic inter-dependencies among the multivariates, e.g., the road network topology in the spatio-temporal time series of traffic volumes in multiple routes, the Graph Convolution Network can incorporate the graphic inter-dependencies into their forecasting models for smaller prediction errors.",
        "address": "New York, NY, USA",
        "author": "Yin, Jiaming and Rao, Weixiong and Yuan, Mingxuan and Zeng, Jia and Zhao, Kai and Zhang, Chenxi and Li, Jiangfeng and Zhao, Qinpei",
        "booktitle": "Proceedings of the 28th ACM International Conference on Information and Knowledge Management",
        "doi": "10.1145/3357384.3357826",
        "isbn": "9781450369763",
        "keywords": "systematic evaluation, multivariate time series, forecasting models",
        "location": "Beijing, China",
        "numpages": "7",
        "pages": "2833\u20132839",
        "publisher": "Association for Computing Machinery",
        "series": "CIKM '19",
        "title": "Experimental Study of Multivariate Time Series Forecasting Models",
        "type": "Article",
        "url": "https://doi.org/10.1145/3357384.3357826",
        "year": "2019"
    },
    "10.1145/3532611": {
        "abstract": "Traffic prediction is the cornerstone of intelligent transportation system. Accurate traffic forecasting is essential for the applications of smart cities, i.e., intelligent traffic management and urban planning. Although various methods are proposed for spatio-temporal modeling, they ignore the dynamic characteristics of correlations among locations on road network. Meanwhile, most Recurrent Neural Network based works are not efficient enough due to their recurrent operations. Additionally, there is a severe lack of fair comparison among different methods on the same datasets. To address the above challenges, in this article, we propose a novel traffic prediction framework, named Dynamic Graph Convolutional Recurrent Network (DGCRN). In DGCRN, hyper-networks are designed to leverage and extract dynamic characteristics from node attributes, while the parameters of dynamic filters are generated at each time step. We filter the node embeddings and then use them to generate dynamic graph, which is integrated with pre-defined static graph. As far as we know, we are first to employ a generation method to model fine topology of dynamic graph at each time step. Furthermore, to enhance efficiency and performance, we employ a training strategy for DGCRN by restricting the iteration number of decoder during forward and backward propagation. Finally, a reproducible standardized benchmark and a brand new representative traffic dataset are opened for fair comparison and further research. Extensive experiments on three datasets demonstrate that our model outperforms 15 baselines consistently. Source codes are available at .",
        "address": "New York, NY, USA",
        "articleno": "9",
        "author": "Li, Fuxian and Feng, Jie and Yan, Huan and Jin, Guangyin and Yang, Fan and Sun, Funing and Jin, Depeng and Li, Yong",
        "doi": "10.1145/3532611",
        "issn": "1556-4681",
        "issue_date": "January 2023",
        "journal": "ACM Trans. Knowl. Discov. Data",
        "keywords": "traffic benchmark, dynamic graph construction, Traffic prediction",
        "month": "feb",
        "number": "1",
        "numpages": "21",
        "publisher": "Association for Computing Machinery",
        "title": "Dynamic Graph Convolutional Recurrent Network for Traffic Prediction: Benchmark and Solution",
        "type": "Article",
        "url": "https://doi.org/10.1145/3532611",
        "volume": "17",
        "year": "2023"
    },
    "10159448": {
        "abstract": "Multivariate time series forecasting has wide applications such as traffic flow prediction, supermarket commodity demand forecasting and etc., and a large number of forecasting models have been developed. Given these models, a natural question has been raised: what theoretical limits of forecasting accuracy can these models achieve? Recent works of urban human mobility prediction have made progress on the maximum predictability that any algorithm can achieve. However, existing approaches on maximum predictability on the multivariate time series fully ignore the interrelationship between multiple variables. In this article, we propose a methodology to measure the upper limit of predictability for multivariate time series with multivariate constraint relations. The key of the proposed methodology is a novel entropy, named Multivariate Constraint Sample Entropy (McSE), to incorporate the multivariate constraint relations for better predictability. We conduct a systematic evaluation over eight datasets and compare existing methods with our proposed predictability and find that we get a higher predictability. We also find that the forecasting algorithms that capture the multivariate constraint relation information, such as GNN, can achieve higher accuracy, confirming the importance of multivariate constraint relations for predictability.",
        "author": "Zhao, Qinpei and Yang, Guangda and Zhao, Kai and Yin, Jiaming and Rao, Weixiong and Chen, Lei",
        "doi": "10.1109/TBDATA.2023.3288693",
        "issn": "2332-7790",
        "journal": "IEEE Transactions on Big Data",
        "keywords": "Time series analysis;Forecasting;Predictive models;Prediction algorithms;Computational modeling;Entropy;Adaptation models;Forecasting model;multivariate sample entropy;multivariate time series;predictability limits",
        "month": "Dec",
        "number": "6",
        "pages": "1536-1548",
        "title": "Multivariate Time-Series Forecasting Model: Predictability Analysis and Empirical Study",
        "type": "Article",
        "volume": "9",
        "year": "2023"
    },
    "2ae2c00a-1939-3207-bf7a-bf14096c7394": {
        "abstract": "A hybrid ensemble learning approach is proposed for financial time series forecasting combining AdaBoost algorithm and long short-term memory (LSTM) network. First, LSTM predictor is trained using the training samples obtained by AdaBoost algorithm. Then, AdaBoost algorithm is applied to obtain the ensemble weights of each LSTM predictor. The forecasting results of all the LSTM predictors are combined using ensemble weights to generate our final results. Four major daily exchange rate datasets and two stock market index datasets are selected for model evaluation and model comparison. The empirical study demonstrates that the proposed AdaBoost-LSTM ensemble learning approach outperform other single forecasting models and other ensemble learning approach in terms of both level forecasting accuracy and directional forecasting accuracy. This suggests that the AdaBoost-LSTM ensemble learning approach is a highly promising for financial time rates forecasting.",
        "author": "Yungao Wu and Jianwei Gao",
        "doi": "https://doi.org/10.18520/cs/v115/i1/159-165",
        "issn": "00113891",
        "journal": "Current Science",
        "number": "1",
        "pages": "159--165",
        "publisher": "Current Science Association",
        "title": "AdaBoost-based long short-term memory ensemble learning approach for financial time series forecasting",
        "type": "Article",
        "url": "https://www.jstor.org/stable/26978163",
        "urldate": "2024-05-15",
        "volume": "115",
        "year": "2018"
    },
    "8648338": {
        "abstract": "Multivariate time series forecasting recently has received extensive attention with its wide application in finance, transportation, environment, and so on. However, few of the currently developed models have considered the impact of noise on prediction. Since multivariate time series contains multiple subsequences with strong nonlinear fluctuations, it is also difficult to obtain satisfactory prediction results. In this paper, aiming at improving prediction performance, we have proposed a novel ensemble three-phase model called adaptive noise reducer-stacked auto-encoder-validating-AdaBoost-based long short-term memory (ANR-SAE-VALSTM). We start with an introduction of a novel ANR for time series noise elimination. The SAEs are then used to extract features from the de-noised multivariate time series. Finally, we feed the de-noised features into the VALSTM to train an ensemble over-fitting prevention predictor. The proposed model is employed on the Beijing PM2.5 dataset and GEFCom2014 Electricity Price dataset. Compared with other popular models, the proposed model has achieved the best prediction performance in all prediction horizons. In addition, a careful ablation study is conducted to demonstrate the efficiency of our model design.",
        "author": "Liu, Fagui and Cai, Muqing and Wang, Liangming and Lu, Yunsheng",
        "doi": "10.1109/ACCESS.2019.2900371",
        "issn": "2169-3536",
        "journal": "IEEE Access",
        "keywords": "Time series analysis;Forecasting;Predictive models;Feature extraction;Autoregressive processes;Adaptation models;Prediction algorithms;Multivariate time series forecasting;adaptive noise reducer;stacked auto-encoders;long short-term memory;validating AdaBoost algorithm",
        "month": "",
        "number": "",
        "pages": "26102-26115",
        "title": "An Ensemble Model Based on Adaptive Noise Reducer and Over-Fitting Prevention LSTM for Multivariate Time Series Forecasting",
        "type": "Article",
        "volume": "7",
        "year": "2019"
    },
    "Memory-Networksoln": {
        "author": "Chang,  Yen-Yu and Sun,  Fan-Yun and Wu,  Yueh-Hua and Lin,  Shou-De",
        "copyright": "arXiv.org perpetual,  non-exclusive license",
        "doi": "10.48550/ARXIV.1809.02105",
        "keywords": "Machine Learning (cs.LG),  Machine Learning (stat.ML),  FOS: Computer and information sciences,  FOS: Computer and information sciences",
        "publisher": "arXiv",
        "title": "A Memory-Network Based Solution for Multivariate Time-Series Forecasting",
        "type": "Article",
        "url": "https://arxiv.org/abs/1809.02105",
        "year": "2018"
    },
    "ROUNAGHI201610": {
        "abstract": "We investigated the presence and changes in, long memory features in the returns and volatility dynamics of S&P 500 and London Stock Exchange using ARMA model. Recently, multifractal analysis has been evolved as an important way to explain the complexity of financial markets which can hardly be described by linear methods of efficient market theory. In financial markets, the weak form of the efficient market hypothesis implies that price returns are serially uncorrelated sequences. In other words, prices should follow a random walk behavior. The random walk hypothesis is evaluated against alternatives accommodating either unifractality or multifractality. Several studies find that the return volatility of stocks tends to exhibit long-range dependence, heavy tails, and clustering. Because stochastic processes with self-similarity possess long-range dependence and heavy tails, it has been suggested that self-similar processes be employed to capture these characteristics in return volatility modeling. The present study applies monthly and yearly forecasting of Time Series Stock Returns in S&P 500 and London Stock Exchange using ARMA model. The statistical analysis of S&P 500 shows that the ARMA model for S&P 500 outperforms the London stock exchange and it is capable for predicting medium or long horizons using real known values. The statistical analysis in London Stock Exchange shows that the ARMA model for monthly stock returns outperforms the yearly. \u200bA comparison between S&P 500 and London Stock Exchange shows that both markets are efficient and have Financial Stability during periods of boom and bust.",
        "author": "Mohammad Mahdi Rounaghi and Farzaneh {Nassir Zadeh}",
        "doi": "https://doi.org/10.1016/j.physa.2016.03.006",
        "issn": "0378-4371",
        "journal": "Physica A: Statistical Mechanics and its Applications",
        "keywords": "Market efficiency, Financial Stability, Boom, Bust, Stock returns, Time series",
        "pages": "10-21",
        "title": "Investigation of market efficiency and Financial Stability between S&P 500 and London Stock Exchange: Monthly and yearly Forecasting of Time Series Stock Returns using ARMA model",
        "type": "Article",
        "url": "https://www.sciencedirect.com/science/article/pii/S0378437116002776",
        "volume": "456",
        "year": "2016"
    },
    "XIAO2018273": {
        "abstract": "As one of promising renewable energy, wind energy has an important position in the field of energy market and it has been always used to generate electricity, thus, the high precision wind speed forecasting is important but challenging for power generation system. Many researchers have devoted their attention to establish efficient wind speed forecasting models, limited by the structure of original models and database, these models could not solve overfitting problem very well and it is rare that a single wind speed forecasting model is always best in all cases since each model has its own particular strengths and weaknesses. The combining method, composed of multiple forecasting models, is regarded as a type of outstanding approach to take advantage of strengths of each model. However, the properties of the individual forecasting models may vary over time, which leads to poorly performance of the combining method using fixed weights, thus, it is more appropriate to allow the combining weights to change according to the time-varying underlying process. This study develops a reliable combination model for wind speed forecasting based on an improved Adaboost algorithm named time-vary-forecasting-effectiveness (TW-FE-Adaboost) algorithm in order to improve the overall forecasting accuracy. In the proposed model, concept drift is firstly used to deal with wind speed time series mainly because the contributions of samples which are varying with time, the second order forecasting effectiveness is used to measure the performance of weak learners. Then, the multi-step ahead forecasting for each site is conducted using TW-FE-Adaboost model in which the input-output sample pairs are determined in a reasonable way. Finally, the ultimate forecast result of wind speed is obtained by aggregating the forecast result of each weak learner. The proposed model is tested using four sites wind speed series collected in Hexi corridor from wind farms located in northwest of China. The experimental results show that the proposed model outperforms all other comparison models in this paper, which demonstrates that the proposed model has superior performances for wind speed forecasting.",
        "author": "Ling Xiao and Yunxuan Dong and Yao Dong",
        "doi": "https://doi.org/10.1016/j.enconman.2018.01.038",
        "issn": "0196-8904",
        "journal": "Energy Conversion and Management",
        "keywords": "Combination approach, Time-varying, Weight determined, Wind speed forecasting",
        "pages": "273-288",
        "title": "An improved combination approach based on Adaboost algorithm for wind speed time series forecasting",
        "type": "Article",
        "url": "https://www.sciencedirect.com/science/article/pii/S0196890418300384",
        "volume": "160",
        "year": "2018"
    },
    "app8081286": {
        "abstract": "Solar photovoltaic (PV) power forecasting has become an important issue with regard to the power grid in terms of the effective integration of large-scale PV plants. As the main influence factor of PV power generation, solar irradiance and its accurate forecasting are the prerequisite for solar PV power forecasting. However, previous forecasting approaches using manual feature extraction (MFE), traditional modeling and single deep learning (DL) models could not satisfy the performance requirements in partial scenarios with complex fluctuations. Therefore, an improved DL model based on wavelet decomposition (WD), the Convolutional Neural Network (CNN), and Long Short-Term Memory (LSTM) is proposed for day-ahead solar irradiance forecasting. Given the high dependency of solar irradiance on weather status, the proposed model is individually established under four general weather type (i.e., sunny, cloudy, rainy and heavy rainy). For certain weather types, the raw solar irradiance sequence is decomposed into several subsequences via discrete wavelet transformation. Then each subsequence is fed into the CNN based local feature extractor to automatically learn the abstract feature representation from the raw subsequence data. Since the extracted features of each subsequence are also time series data, they are individually transported to LSTM to construct the subsequence forecasting model. In the end, the final solar irradiance forecasting results under certain weather types are obtained via the wavelet reconstruction of these forecasted subsequences. This case study further verifies the enhanced forecasting accuracy of our proposed method via a comparison with traditional and single DL models.",
        "article-number": "1286",
        "author": "Wang, Fei and Yu, Yili and Zhang, Zhanyao and Li, Jie and Zhen, Zhao and Li, Kangping",
        "doi": "10.3390/app8081286",
        "issn": "2076-3417",
        "journal": "Applied Sciences",
        "number": "8",
        "title": "Wavelet Decomposition and Convolutional LSTM Networks Based Improved Deep Learning Model for Solar Irradiance Forecasting",
        "type": "Article",
        "url": "https://www.mdpi.com/2076-3417/8/8/1286",
        "volume": "8",
        "year": "2018"
    }
};