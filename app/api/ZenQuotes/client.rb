module ZenQuotes
    class Client
        def self.today
            response = Request.call(http_method: 'get', endpoint: '/today')
        end
    end
end